const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

function onStartClick () {
  timerId = setInterval(() => {
    toChangeBgColor();
  }, 1000);
};

function onStopClick () {
    clearInterval(timerId);
    refs.btnStart.removeAttribute('disabled');
};

function toChangeBgColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.btnStart.setAttribute('disabled', true);
};





 


