$(document).ready(function() {
	//导航栏悬浮变灰色
	$("nav div[class!='all-goods']").mouseenter(function() {
		$(this).css("background-color", "#a8c0e2");
	})
	$("nav div[class!='all-goods']").mouseleave(function() {
		$(this).css("background-color", "#4593fd");
	})
	//全部商品项
	$("li").mouseenter(function() {
		$("aside figure").css({
			"pointer-events": "none"
		});
		//当前行放上去背景颜色变色，字体变色
		$(this).css("background-color", "#EDEDED");
		$(this).find("a").css("color", "red");
		//根据每一行li的value判断出现哪一个的详细信息
		switch($(this).val()) {
			case 1:
				$(".aside-list-row1").css("display", "inline-block");
				break;
			case 2:
				$(".aside-list-row2").css("display", "inline-block");
				break;
			default:
				break;
		}
	})
	//鼠标放在详细信息上时，使其保持显示
	$(".aside-list>div").mouseenter(function() {
		$("aside figure").css({
			"pointer-events": "none"
		});
		event.stopPropagation();
		switch($(this).attr("class")) {
			case "aside-list-row1":
				$(".aside-list-row1").css("display", "inline-block");
				break;
			case "aside-list-row2":
				$(".aside-list-row2").css("display", "inline-block");
				break;
			default:
				break;
		}
	})
	//离开li或详细信息时，关闭详细信息
	$("li,.aside-list").mouseleave(function() {
		$(".aside-list>div").css("display", "none");
		$("aside figure").css({
			"pointer-events": "all"
		});
	})
	//当前行离开时背景颜色变色，字体变色
	$("li").mouseleave(function() {
		$(this).css("background-color", "#4593fd");
		$(this).find("a").css("color", "white");
	})

	//当前点击的input按钮的value
	var currentimg = "btn3";
	//判断是否是鼠标点击事件
	var isClicking = false;
	//
	var timeoutchose;
	$("figcaption input").click(function(event) {
		//判断是否是鼠标点击事件，如果是，控制轮播条件为否
		//并等待5s后恢复true，同时轮播重新开始
		if(event.pageX) {
			isClicking = true;
			clearTimeout(timeoutchose);
			timeoutchose = setTimeout(function() {
				isClicking = false;
				carousel_1();
			}, 5000)
		}
		$("figcaption input").css("background-color", "white");
		$(this).css("background-color", "orangered");
		if(currentimg != $(this).val()) {
			currentimg = $(this).val();
			$("figcaption input").css("pointer-events", "none");
			switch($(this).val()) {
				case "btn1":
					$(".div-img1").css("left", "-850px");
					break;
				case "btn2":
					$(".div-img2").css("left", "-850px");
					break;
				case "btn3":
					$(".div-img3").css("left", "-850px");
					break;
				default:
					break;
			}
			$(".div-img1,.div-img2,.div-img3").animate({
				left: '+=850px'
			}, 2000, function() {
				$("figcaption input").css("pointer-events", "all");
			});
		}

	})

	//
	$("figcaption input").mousedown(function() {
		$("figcaption input").css("background-color", "white")
		$(this).css("background-color", "orangered");
	})

	//控制自动轮播

	currentimg = "btn1";

	function carousel_1() {
		if(isClicking == false) {
			$("figcaption input:nth-child(3)").click();
			setTimeout(carousel_2, 3000);
		}

	}

	function carousel_2() {
		if(isClicking == false) {
			$("figcaption input:nth-child(2)").click();
			setTimeout(carousel_3, 3000);
		}

	}

	function carousel_3() {
		if(isClicking == false) {
			$("figcaption input:nth-child(1)").click();
			setTimeout(carousel_1, 3000);
		}

	}
	carousel_1();
})