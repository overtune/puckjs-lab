setInterval(function () {
  if (digitalRead(BTN)) getTemp();
}, 400);

function getTemp() {
	var temp = E.getTemperature();

	if (temp < 18) {
		digitalWrite(LED3, 1);	
	}
	else if (temp > 22) {
		digitalWrite(LED1, 1);
	} else {
		digitalWrite(LED2, 1);
	}

	setTimeout(function () {
		digitalWrite(LED1, 0);
		digitalWrite(LED2, 0);
		digitalWrite(LED3, 0);
	}, 1000);
}
