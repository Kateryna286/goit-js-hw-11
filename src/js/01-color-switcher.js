import '../css/common.css';

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};

console.log(refs.btnStart);
console.log(refs.btnStop);
console.log(refs.body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

let timerId = null;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

function onStartClick () {
  timerId = setInterval(() => {
    toChangeBgColor();
  }, 1000);
    console.log('Start');
};

function onStopClick () {
    clearInterval(timerId);
    refs.btnStart.removeAttribute('disabled');
    console.log('Stop');
};

function toChangeBgColor() {
    refs.body.style.backgroundColor = `${getRandomHexColor()}`;
    refs.btnStart.setAttribute('disabled', true);
    console.log('changing colors');
};





 


