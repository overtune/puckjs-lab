var ledRed = document.getElementById('ledRed'),
	ledGreen = document.getElementById('ledGreen'),
	ledBlue = document.getElementById('ledBlue');

ledRed.addEventListener('click', toggleLed);
ledGreen.addEventListener('click', toggleLed);
ledBlue.addEventListener('click', toggleLed);

function toggleLed(event) {
	event.preventDefault();
	var el = this;

	if (el.isActive) {
		el.isActive = false;
		el.classList.remove('active');
		Puck.write('LED' + el.getAttribute('data-id') + '.reset();\n');
	} else {
		el.isActive = true;
		el.classList.add('active');
		Puck.write('LED' + el.getAttribute('data-id') + '.set();\n');
	}
}
