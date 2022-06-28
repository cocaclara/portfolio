$(document).ready(function () {
	// top버튼 스크롤 올리기
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$(".top").fadeIn(300);
		} else {
			$(".top").fadeOut(300);
		}
	});

	$(".top").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
		return false;
	});

	// 서브메뉴 띄우기
	$("nav>ul>li:first-child").mouseover(function(){
		$(".submenu").stop().slideDown(500);
	});
	$("nav>ul>li:first-child").mouseout(function(){
		$(".submenu").stop().slideUp(300);
	});

	// 서브메뉴 스크롤 내리면 고정하기
	var offset = $("nav").offset(); //nav 위치 좌표파악

	$(window).scroll(function(){
		if( $(document).scrollTop() > offset.top ){
			$("nav").addClass('fix');
			$("nav>h2").show().addClass("fix");
		} else {
			$("nav").removeClass("fix");
			$("nav>h2").hide();
		}
	});

	// .sec3 글씨 마우스 오버 시, 컬러&배경 바뀜 
	$(".sec3 li>a").mouseover(function(){
		$(this).parent().stop().addClass("active");
		$(this).parent().siblings().stop().removeClass("active");
	});

	// .sec4 이미지 자동 슬라이드
		//롤링 배너 복제본 생성
		let roller = document.querySelector(".brand");
		 roller.id = "roller1";

		let clone = roller.cloneNode(true);
		clone.id = "roller2";
		document.querySelector(".banner").appendChild(clone);//배너 뷰포트 뒤에 부착

		//원본, 복제본 배너 위치 지정
		document.querySelector("#roller1").style.left = '0px';
		document.querySelector("#roller2").style.left = document.querySelector(".brand ul").offsetWidth + "px";

		//클래스 할당 //element.classList.add(); = $("#element").addClass();
		roller.classList.add("original");
		clone.classList.add("clone");

		//인터벌 메서드로 애니메이션 생성 //setInterval(콜백function명, milliseconds, param1, param2, ...);//param은 함수에 전달할 인자로 보면 됨.
		let rollerWidth = document.querySelector(".brand ul").offsetWidth; //배너 너비값
		let betweenDistance = 1; // 이동 크기 - 정수여야 함(애니메이션 튀는 현상 방지)
		originalID = setInterval(callBack, parseInt(1000/100), betweenDistance, document.querySelector("#roller1"));
		cloneID = setInterval(callBack, parseInt(1000/100), betweenDistance, document.querySelector("#roller2"));
		//인터벌 애니메이션 함수(공용으로 사용) //function callback(a,b){};
		function callBack(distance, roller){
			let left = parseInt(roller.style.left);
			roller.style.left = (left - distance) + "px"; //왼쪽으로 이동
			//조건부 위치 리셋
			if(rollerWidth + (left - distance) <= 0){
				roller.style.left = rollerWidth + "px";
			}
		};

});
