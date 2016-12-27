function flash() {
  digitalWrite(LED1, 1);
  
  setTimeout(function () {
    digitalWrite(LED1, 0);
    digitalWrite(LED2, 1);
  }, 200);
  
  setTimeout(function () {
    digitalWrite(LED2, 0);
    digitalWrite(LED3, 1);
  }, 400);
  
  setTimeout(function () {
    digitalWrite(LED3, 0);
  }, 600);
}

setInterval(function () {
  if (digitalRead(BTN)) flash();
}, 800);
