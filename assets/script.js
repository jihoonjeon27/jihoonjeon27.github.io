$(document).ready(function() {
	
	var hcenter = $(window).width() / 2 - 450;
	$("#white-box").css("left", hcenter);

	$("#start-button").click(function() {
		$("html, body").animate({scrollTop: $(window).height()}, "slow");
	})

	$("#back-to-top").hover(function() {
		$("#one").css("top", "0px");
	})

	$("#back-to-top").click(function() {
		$("html, body").animate({scrollTop: "0px"});
	})

	function power(x, a) {
		var rtn = 1;
		for (i = 0; i < a; i++) {
			rtn *= x;
		}
		return rtn;
	}

	function factorial(n) {
		if (n == 0) {
			return 1;
		}
		return (n * factorial(n-1));
	}

	function choose(n, k) {
		return factorial(n) / (factorial(k) * factorial(n-k));
	}

	function findChance(successRate, numScrolls, successes) {
		return choose(numScrolls, successes) * (power(successRate, successes) * power(1 - successRate, numScrolls - successes));
	}

	function validate(successRate, numScrolls, successes) {
		if (successRate < 0 || successRate > 1 || successRate == null || successRate == "") {
			alert("Success Rate must be between 0% and 100%!");
			return false;
		}
		if (numScrolls < 1 || numScrolls == null || numScrolls == "") {
			alert("The number of scrolls must be a positive number!");
			return false;
		}
		if (successes < 0 || successes == null || successes == "") {
			alert("The number of successes cannot be a negative number");
			return false;
		}
		if (successes > numScrolls) {
			alert("The number of successes cannot be greater than the number of scrolls!");
			return false;
		}
	}

	$("#confirm-button").click(function() {
		var successRate = $("#rate").val() / 100;
		var numScrolls = $("#num").val();
		var successes = $("#success").val();
		if (validate(successRate, numScrolls, successes) == false) {
			return false;
		}
		var chance = findChance(successRate, numScrolls, successes) * 100;
		chance = Math.round(chance * 100) / 100;
		alert("The chance of getting " + successes + " successes out of " + numScrolls + " scrolls with " + $("#rate").val() + " success rate is " + chance + "%");
	})

	$("#clear").click(function() {
		$("#rate").val("");
		$("#num").val("");
		$("#success").val("");
	})

	function parallax() {
	    var scrolled = $(window).scrollTop();
	    $("#one").css("top", scrolled + "px");
	}

	$(window).scroll(function () {
	    parallax();
	})
	
});