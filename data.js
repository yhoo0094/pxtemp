const data = [
	{ "ITM_SEQ": "0000000001", "TYPE": "기타", "TYPE_DTL": "디퓨저", "IMG": "캘리포니아센트 스필프루프 코로나도.jpg", "ITM_NM": "캘리포니아센트 스필프루프 코로나도", "PRICE": "2970", "UNIT": "1", "RMRK": "체리향 디퓨저" },
	{ "ITM_SEQ": "0000000002", "TYPE": "기타", "TYPE_DTL": "디퓨저", "IMG": "image.png", "ITM_NM": "젠틀 디퓨저 블랙로즈", "PRICE": "6100", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000003", "TYPE": "기타", "TYPE_DTL": "디퓨저", "IMG": "image.png", "ITM_NM": "에멜시 차량용 방향제 170ml 헤블린 오션", "PRICE": "8760", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000004", "TYPE": "기타", "TYPE_DTL": "디퓨저", "IMG": "image.png", "ITM_NM": "그라스 디퓨저 105ml 블랙베리&체리", "PRICE": "8990", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000005", "TYPE": "기타", "TYPE_DTL": "세재", "IMG": "image.png", "ITM_NM": "다우니 프리미엄 세탁세제 액체형 실내건조", "PRICE": "6150", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000006", "TYPE": "식품", "TYPE_DTL": "과자", "IMG": "image.png", "ITM_NM": "프링글스양파맛", "PRICE": "1250", "UNIT": "12", "RMRK": "" },
	{ "ITM_SEQ": "0000000007", "TYPE": "식품", "TYPE_DTL": "과자", "IMG": "image.png", "ITM_NM": "프링글스 리치치즈갈릭", "PRICE": "1400", "UNIT": "12", "RMRK": "" },
	{ "ITM_SEQ": "0000000008", "TYPE": "식품", "TYPE_DTL": "음료", "IMG": "image.png", "ITM_NM": "펩시제로슈거라임 500ml", "PRICE": "680", "UNIT": "20", "RMRK": "" },
	{ "ITM_SEQ": "0000000009", "TYPE": "식품", "TYPE_DTL": "음료", "IMG": "image.png", "ITM_NM": "핫식스더킹러쉬 355ml", "PRICE": "710", "UNIT": "24", "RMRK": "" },
	{ "ITM_SEQ": "0000000010", "TYPE": "식품", "TYPE_DTL": "음료", "IMG": "image.png", "ITM_NM": "핫식스더킹파워 355ml", "PRICE": "740", "UNIT": "24", "RMRK": "" },
	{ "ITM_SEQ": "0000000011", "TYPE": "식품", "TYPE_DTL": "음료", "IMG": "image.png", "ITM_NM": "몬스터에너지 울트라 355ml", "PRICE": "1420", "UNIT": "24", "RMRK": "" },
	{ "ITM_SEQ": "0000000012", "TYPE": "식품", "TYPE_DTL": "즉석밥", "IMG": "image.png", "ITM_NM": "햇반 130g", "PRICE": "620", "UNIT": "36", "RMRK": "" },
	{ "ITM_SEQ": "0000000013", "TYPE": "식품", "TYPE_DTL": "차", "IMG": "image.png", "ITM_NM": "쟈뎅 아워티 콤푸차 레몬 10p", "PRICE": "2550", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000014", "TYPE": "식품", "TYPE_DTL": "차", "IMG": "image.png", "ITM_NM": "쟈뎅 아워티 콤푸차 베리 10p", "PRICE": "2550", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000015", "TYPE": "식품", "TYPE_DTL": "차", "IMG": "image.png", "ITM_NM": "쟈뎅 아워티 콤푸차 자몽 10p", "PRICE": "2550", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000016", "TYPE": "식품", "TYPE_DTL": "캔디", "IMG": "image.png", "ITM_NM": "박카스맛젤리", "PRICE": "570", "UNIT": "8", "RMRK": "" },
	{ "ITM_SEQ": "0000000017", "TYPE": "식품", "TYPE_DTL": "캔디", "IMG": "image.png", "ITM_NM": "이클립스 페퍼민트향 34g", "PRICE": "960", "UNIT": "8", "RMRK": "" },
	{ "ITM_SEQ": "0000000018", "TYPE": "식품", "TYPE_DTL": "캔디", "IMG": "image.png", "ITM_NM": "이클립스 피치향 34g", "PRICE": "990", "UNIT": "8", "RMRK": "" },
	{ "ITM_SEQ": "0000000019", "TYPE": "화장품", "TYPE_DTL": "마스크팩", "IMG": "image.png", "ITM_NM": "에스앤피 골드 콜라겐 앰플 마스크", "PRICE": "480", "UNIT": "60", "RMRK": "" },
	{ "ITM_SEQ": "0000000020", "TYPE": "화장품", "TYPE_DTL": "마스크팩", "IMG": "image.png", "ITM_NM": "SNP 골드 콜라겐 앰플 마스크", "PRICE": "480", "UNIT": "10", "RMRK": "" },
	{ "ITM_SEQ": "0000000021", "TYPE": "화장품", "TYPE_DTL": "마스크팩", "IMG": "image.png", "ITM_NM": "메디힐 디엔에이 프로아틴 마스크", "PRICE": "700", "UNIT": "10", "RMRK": "" },
	{ "ITM_SEQ": "0000000022", "TYPE": "화장품", "TYPE_DTL": "선크림", "IMG": "image.png", "ITM_NM": "닥터지 메디유브이 울트라 선 50ml", "PRICE": "4750", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000023", "TYPE": "화장품", "TYPE_DTL": "선크림", "IMG": "image.png", "ITM_NM": "AHC 내추럴 퍼펙션 프레쉬선스틱", "PRICE": "8800", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000024", "TYPE": "화장품", "TYPE_DTL": "아이크림", "IMG": "image.png", "ITM_NM": "AHC프라이빗 리얼아이크림기프트세트", "PRICE": "5560", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000025", "TYPE": "화장품", "TYPE_DTL": "영양크림", "IMG": "image.png", "ITM_NM": "마녀공장 비피다 바이옴 수분 장벽 강화 크림 기획세트", "PRICE": "4710", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000026", "TYPE": "화장품", "TYPE_DTL": "영양크림", "IMG": "image.png", "ITM_NM": "이니스프리 퍼펙트9인텐시브 크림", "PRICE": "7900", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000027", "TYPE": "화장품", "TYPE_DTL": "영양크림", "IMG": "image.png", "ITM_NM": "닥터지 로얄 블랙스네일 크림", "PRICE": "10080", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000028", "TYPE": "화장품", "TYPE_DTL": "영양크림", "IMG": "image.png", "ITM_NM": "아이소이 탄력크림EX", "PRICE": "14090", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000029", "TYPE": "화장품", "TYPE_DTL": "영양크림", "IMG": "image.png", "ITM_NM": "다이아몬드 리페어 퍼펙트 세트", "PRICE": "38930", "UNIT": "1", "RMRK": "송윤아크림" },
	{ "ITM_SEQ": "0000000030", "TYPE": "화장품", "TYPE_DTL": "폼클렌징", "IMG": "image.png", "ITM_NM": "닥터지 레드 블레미쉬 모이스처 클렌징 폼", "PRICE": "4320", "UNIT": "1", "RMRK": "" },
	{ "ITM_SEQ": "0000000031", "TYPE": "화장품", "TYPE_DTL": "폼클렌징", "IMG": "image.png", "ITM_NM": "뉴트로지나 딥클린 아크네 포밍", "PRICE": "4390", "UNIT": "1", "RMRK": "" },
]

