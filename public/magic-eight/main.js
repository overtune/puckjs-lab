/**
 * @see: https://github.com/alexgibson/shake.js
 */
var lastTime = new Date(),
	lastX = null,
	lastY = null,
	lastZ = null,
	threshold = 35,
	timeout = 3000;

Puck.magOn();
Puck.on('mag', function(current) {
	var currentTime,
		timeDifference,
		deltaX = 0,
		deltaY = 0,
		deltaZ = 0;

	if (lastX === null && lastY === null && lastZ === null) {
		lastX = current.x;
		lastY = current.y;
		lastZ = current.z;
		return;
	}

	deltaX = Math.abs(lastX - current.x);
	deltaY = Math.abs(lastY - current.y);
	deltaZ = Math.abs(lastZ - current.z);

	if (((deltaX > threshold) && (deltaY > threshold) || (deltaX > threshold) && deltaZ > threshold) || ((deltaY > threshold) && (deltaZ > threshold))) {
		currentTime = new Date();
		timeDifference = currentTime.getTime() - lastTime.getTime();

		if (timeDifference > timeout) {
			shake();
			lastTime = new Date();
		}
	}

	lastX = current.x;
	lastY = current.y;
	lastZ = current.z;
});

function shake() {
	var answer = Math.random() < 0.5;

	if (answer) {
		digitalWrite(LED1, 1);
	} else {
		digitalWrite(LED2, 1);
	}


	setTimeout(function () {
		digitalWrite(LED1, 0);
		digitalWrite(LED2, 0);
	}, 1000);
}
