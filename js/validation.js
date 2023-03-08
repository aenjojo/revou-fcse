function validateForm() {
	const name = document.forms['contact-form']['name'].value;
	const email = document.forms['contact-form']['email'].value;
	const interest = document.forms['contact-form']['interest'].value;

	if (name && email && interest !== 'none') {
		alert(`Data anda telah sukses terkirim, ${name}`);

		return false;
	}

	
	if (!name) {
		const errName = document.getElementById('name-error');

		errName.style.display = 'block';
		errName.style.visibility = 'visible';
	}

	if (!email) {
		const errEmail = document.getElementById('email-error');

		errEmail.style.display = 'block';
		errEmail.style.visibility = 'visible';
	}

	if (interest === 'none') {
		const errInterest = document.getElementById('interest-error');

		errInterest.style.display = 'block';
		errInterest.style.visibility = 'visible';
	}

	return false;
}

function fillInput(fieldName) {
	const inputValue = document.getElementById(fieldName).value;
	const errorText = document.getElementById(`${fieldName}-error`);

	if (inputValue && errorText.style.visibility === 'visible') {
		errorText.style.display = 'none';
		errorText.style.visibility = 'hidden';
	}
}

function selectInterest() {
	const interestValue = document.getElementById('interest').value;
	const errorText = document.getElementById('interest-error');

	if (interestValue !== 'none' && errorText.style.visibility === 'visible') {
		errorText.style.display = 'none';
		errorText.style.visibility = 'hidden';
	}
}