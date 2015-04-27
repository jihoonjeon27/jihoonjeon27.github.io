$(document).ready(function() {

	function cartext() {
		var scrolled = $(window).scrollTop();
		if (scrolled >= $(window).height() * 0.8) {
			$("#car1-text").show();
		} else {
			$("#car1-text").hide();
		}
		if (scrolled > $(window).height() * 1.65) {
			$("#car1-text").hide();
			$("#car2-text").show();
		} else {
			$("#car2-text").hide();
		}
		if (scrolled > $(window).height() * 2.75) {
			$("#car2-text").hide();
			$("#car3-text").show();
		} else {
			$("#car3-text").hide();
		}
		if (scrolled > $(window).height() * 3.75) {
			$("#car3-text").hide();
			$("#car4-text").show();
		} else {
			$("#car4-text").hide();
		}
	}

	$(window).scroll(function() {
		cartext();
	})

	$("#home-icon").click(function() {
		$("html, body").animate({scrollTop: "0px"});
	});

	$("#car-button-1").click(function() {
		$("html, body").animate({scrollTop: $(window).height()});
	});

	$("#car-button-2").click(function() {
		$("html, body").animate({scrollTop: $(window).height()*2});
	});

	$("#car-button-3").click(function() {
		$("html, body").animate({scrollTop: $(window).height()*3});
	});

	$("#car-button-4").click(function() {
		$("html, body").animate({scrollTop: $(window).height()*4});
	});

	$("#basic1").click(function() {
		$("#mech-des1").hide();

		$("#basic-des1").toggle();
	});

	$("#mechanical1").click(function() {
		$("#basic-des1").hide();

		$("#mech-des1").toggle();
	});

	$("#basic2").click(function() {
		$("#mech-des2").hide();

		$("#basic-des2").toggle();
	});

	$("#mechanical2").click(function() {
		$("#basic-des2").hide();

		$("#mech-des2").toggle();
	});

	$("#basic3").click(function() {
		$("#mech-des3").hide();

		$("#basic-des3").toggle();
	});

	$("#mechanical3").click(function() {
		$("#basic-des3").hide();

		$("#mech-des3").toggle();
	});

	$("#basic4").click(function() {
		$("#mech-des4").hide();

		$("#basic-des4").toggle();
	});

	$("#mechanical4").click(function() {
		$("#basic-des4").hide();

		$("#mech-des4").toggle();
	});

	$("#invis-layer").click(function() {
		$("#basic-des1").hide();
		$("#basic-des2").hide();
		$("#basic-des3").hide();
		$("#basic-des4").hide();
		$("#mech-des1").hide();
		$("#mech-des2").hide();
		$("#mech-des3").hide();
		$("#mech-des4").hide();
	});

	$(window).scroll(function () {
		var height = $(window).scrollTop();
		if (height >= $(window).height()*0.75) {
			$("#car-button-1").css("background-color", "#F7FF3F");
		} else {
			$("#car-button-1").css("background-color", "#FF2321");
		}
		if (height >= $(window).height()*1.75) {
			$("#car-button-1").css("background-color", "#FF2321");	
			$("#car-button-2").css("background-color", "yellow");
		} else {
			$("#car-button-2").css("background-color", "#FF2321");
		}
		if (height >= $(window).height()*2.75) {
			$("#car-button-2").css("background-color", "#FF2321");	
			$("#car-button-3").css("background-color", "yellow");
		} else {
			$("#car-button-3").css("background-color", "#FF2321");
		}
		if (height >= $(window).height()*3.75) {
			$("#car-button-3").css("background-color", "#FF2321");	
			$("#car-button-4").css("background-color", "yellow");
		} else {
			$("#car-button-4").css("background-color", "#FF2321");
		}
	});

	$("#overlay").click(function() {
		$(this).hide();
		$(".pic").hide();
	})

	$("#mp1").click(function() {
		$("#overlay").toggle();
		$(".pic").toggle();
	})

	$("#mp2").click(function() {
		$("#overlay").toggle();
		$(".pic").toggle();
	})

	$("#mp3").click(function() {
		$("#overlay").toggle();
		$(".pic").toggle();
	})

	$("#mp4").click(function() {
		$("#overlay").toggle();
		$(".pic").toggle();
	})

	$("#porsche-1").hover(function() {
		$("#car1").css("background-image", "url(assets/img/porsche.jpg)");
	})

	$("#porsche-2").hover(function() {
		$("#car1").css("background-image", "url(assets/img/porsche-2.jpg)");
	})

	$("#porsche-3").hover(function() {
		$("#car1").css("background-image", "url(assets/img/porsche-3.jpg)");
	})

	$("#porsche-4").hover(function() {
		$("#car1").css("background-image", "url(assets/img/porsche-4.jpg)");
	})

	$("#bmw-1").hover(function() {
		$("#car2").css("background-image", "url(assets/img/bmw.jpg)");
	})

	$("#bmw-2").hover(function() {
		$("#car2").css("background-image", "url(assets/img/bmw-2.jpg)");
	})

	$("#bmw-3").hover(function() {
		$("#car2").css("background-image", "url(assets/img/bmw-3.jpg)");
	})

	$("#bmw-4").hover(function() {
		$("#car2").css("background-image", "url(assets/img/bmw-4.jpg)");
	})

	$("#c63-1").hover(function() {
		$("#car3").css("background-image", "url(assets/img/c63.jpg)");
	})

	$("#c63-2").hover(function() {
		$("#car3").css("background-image", "url(assets/img/c63-2.jpg)");
	})

	$("#c63-3").hover(function() {
		$("#car3").css("background-image", "url(assets/img/c63-3.jpg)");
	})

	$("#c63-4").hover(function() {
		$("#car3").css("background-image", "url(assets/img/c63-4.jpg)");
	})

	$("#rs5-1").hover(function() {
		$("#car4").css("background-image", "url(assets/img/rs5.jpg)");
	})

	$("#rs5-2").hover(function() {
		$("#car4").css("background-image", "url(assets/img/rs5-2.jpg)");
	})

	$("#rs5-3").hover(function() {
		$("#car4").css("background-image", "url(assets/img/rs5-3.jpg)");
	})

	$("#rs5-4").hover(function() {
		$("#car4").css("background-image", "url(assets/img/rs5-4.jpg)");
	})

});