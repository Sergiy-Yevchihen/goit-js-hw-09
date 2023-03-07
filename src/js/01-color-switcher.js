const bodyColor = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const btnColor = document.querySelector('.back-btn');
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStop.setAttribute('disabled', '');

buttonStart.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  buttonStop.removeAttribute('disabled');

  intervalId = setInterval(() => {
      bodyColor.style.backgroundColor = getRandomHexColor();
      btnColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

buttonStop.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  buttonStart.removeAttribute('disabled');

  clearInterval(intervalId);
});
