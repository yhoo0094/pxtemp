$(()=>{
	setSchOption();	//조회조건 세팅
	setData();		//데이터 세팅
})

//조회조건 세팅
function setSchOption() {
	let typeArr = [];
	for(let item of data){
		if(!typeArr.includes(item.TYPE)){
			typeArr.push(item.TYPE);
			let tag = '<option value="' + item.TYPE +'">' + item.TYPE +'</option>'
			$('#schType').append(tag);
		}
	}
}

//데이터 세팅
function setData() {
	loadingStart();
	
	let totalTag = '';
	
	//검색 조건에 따라 필터링
	let targetData = [];
	for(let item of data){
		//분류 필터링
		let schType = $('#schType').val();
		if(schType != '' && item.TYPE != schType){
			continue;
		}
		
		//상품명 필터링
		let schItmNm = $('#schItmNm').val().trim();
		if(schItmNm != '' && !item.ITM_NM.includes(schItmNm)){
			continue;
		}
		
		targetData.push(item);
	}

    // 데이터 정렬
    let orderCol = $('#schOrder').val();
    targetData.sort((a, b) => {
        let nameA = a[orderCol];
        let nameB = b[orderCol];
        
        if(orderCol == 'PRICE'){
			nameA = a['PRICE'] * a['UNIT'];
			nameB = b['PRICE'] * b['UNIT'];
		}

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0; // 이름이 같을 경우
    });
	
	for(let item of targetData){
		let tag = '<div class="itemBlock">'
					+ '<div class="itemCard">'
						+ '<div class="itemImgBox itemInfo">'
							+ '<img src="./images/' + item.IMG + '" class="itemImg">'
						+ '</div>'
						+ '<div class="itemName itemInfo">' + item.ITM_NM + '(' + item.UNIT + '개)</div>'
						+ '<div class="itemPrice itemInfo">' + formatNumber(item.PRICE * item.UNIT )+ '원</div>'
						+ '<div class="itemBtn itemInfo"><button type="button" class="btn btn-primary" onClick="copyNm(this)" data-nm="' + item.ITM_NM + '">상품명 복사</button></div>'
					+ '</div>'
				+ '</div>';
		totalTag += tag;		
	}
	$('#itemBox').html(totalTag);
	
	loadingEnd();
}

//복사 이벤트
function copyNm(item){
	navigator.clipboard.writeText($(item).data('nm'));
}

//천 단위 구분 기호
function formatNumber(num) {
    const numStr = num.toString();
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//로딩패널 보이기
function loadingStart(){
	$('#loadingPanel').css('display','flex');	
};

//로딩패널 숨기기
function loadingEnd(){
	$('#loadingPanel').css('display','none');	
};