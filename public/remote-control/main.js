var remoteTimeout = false,
	clickCount = 0;

setWatch(function(e) {
	clickCount++;

	if (remoteTimeout) {
		clearTimeout(remoteTimeout);
	}

	if (e.time - e.lastTime > 2) {
		clickCount = 0;
		remote(false);
	} else {
		remoteTimeout = setTimeout(function () {
			remoteTimeout = false;
			remote(clickCount);
			clickCount = 0;
		}, 1000);
	}
}, BTN, { edge: 'falling', debounce: 50, repeat: true });

function remote(clickCount) {
	if (clickCount === false) {
		digitalWrite(LED1, 1);
	}
	else if (clickCount === 1) {
		digitalWrite(LED2, 1);
	}
	else if (clickCount === 2) {
		digitalWrite(LED3, 1);
	}

	setTimeout(function () {
		digitalWrite(LED1, 0);
		digitalWrite(LED2, 0);
		digitalWrite(LED3, 0);
	}, 1000);
}
