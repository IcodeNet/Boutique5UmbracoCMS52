$(window).load(function() {

	$('#email').focus(function() {
		if ($(this).val()=='Email deines Freundes') {
			$(this).val("");
		}
	}).blur(function () {
		if ($(this).val() == "") {
			$(this).val("Email deines Freundes");
		}
	});

})

