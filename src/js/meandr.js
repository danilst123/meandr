$(function() {

	$('.header__btn').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.feedback').offset().top
	    }, 2000);
	});

	$(document).on('focus', 'input[name*="phone"]', function() {
	    $(this).mask("+7 (999)-999-99-99");
	});

	$('#feedback-form').submit(function(e) {
		e.preventDefault();

		$('.feedback__error').text('');

		var name, phone, email, nameVal, phoneVal, emailVal, nameIsValid, phoneIsValid, emailIsValid;

		nameIsValid = false;
		phoneIsValid = false;
		emailIsValid = false;

		name = $('#feedback-form [name="name"]');
		phone = $('#feedback-form [name="phone"]');
		email = $('#feedback-form [name="email"]');

		nameVal = name.val();
		phoneVal = phone.val();
		emailVal = email.val();


		console.log(name, phone, email, nameVal, phoneVal, emailVal);

		if (nameVal == "") {
			name.next().text('Заполните фамилию и имя');
		} else {
			nameIsValid = true;
		}

		if (emailVal == "") {
			email.next().text('Заполните почту');
		} else if (emailVal.indexOf('@') == -1) {
			email.next().text('Неверный формат почты');
		} else {
			emailIsValid = true;
		}

		if (phoneVal == "") {
			phone.next().text('Заполните телефон');
		} else {
			phoneIsValid = true;
		}

		$('html, body').animate({
		    scrollTop: $(this).offset().top - 30
		}, 300);


		if (nameIsValid && emailIsValid && phoneIsValid) {
			alert('Форма валидна');
		}

	});

});