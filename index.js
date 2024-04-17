$(()=>{
	setData();
})

//데이터 세팅
function setData() {
	let totalTag = '';
	for(let item of data){
		let tag = '<div class="itemBlock">'
					+ '<div class="itemCard">'
						+ '<div class="itemImgBox itemInfo">'
							+ '<img src="./images/' + item.IMG + '" class="itemImg">'
						+ '</div>'
						+ '<div class="itemName itemInfo">' + item.ITM_NM + '(' + item.UNIT + '개)</div>'
						+ '<div class="itemPrice itemInfo">' + item.PRICE * item.UNIT + '원</div>'
						+ '<div class="itemBtn itemInfo"><button type="button" class="btn btn-primary" onClick="copyNm(this)" data-nm="' + item.ITM_NM + '">상품명 복사</button></div>'
					+ '</div>'
				+ '</div>';
		totalTag += tag;		
	}
	$('#itemBox').html(totalTag);
}

//복사 이벤트
function copyNm(item){
	navigator.clipboard.writeText($(item).data('nm'));
}