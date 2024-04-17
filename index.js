$(()=>{
	setData();
})

function setData() {
	let totalTag = '';
	for(let item of data){
		let tag = '<div class="itemCard">'
					+ '<div class="itemImgBox">'
						+ '<img src="./images/' + item.IMG + '" class="itemImg">'
					+ '</div>'
					+ '<p class="itemName">' + item.ITM_NM + '(' + item.UNIT + '개)</p>'
					+ '<p class="itemPrice">' + item.PRICE * item.UNIT + '원</p>'
				+ '</div>';
		totalTag += tag;		
	}
	$('#itemBox').html(totalTag);
}