const message = document.querySelector('.message');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clear = document.getElementById('clear');
// event listeners
send.addEventListener('click', function (e) {
  e.preventDefault();
  let textValue = text.value;
  message.innerHTML = textValue;
});
// clear
clear.addEventListener('click', function (e) {
  e.preventDefault();
  text.value = ' ';
  message.innerHTML = ' ';
});
