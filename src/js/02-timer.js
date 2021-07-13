//import '../css/common.css';


const refs = {
    input: document.querySelector('#date-selector'),
    timerDays: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSeconds: document.querySelector('[data-seconds]'),
    btnStart: document.querySelector('[data-start]'),
};

class Timer {
    constructor({ onTick }) {
        this.intervalId = null,
        this.isActive = false,
        this.onTick = onTick;
    }

    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;

        this.intervalId = setInterval(() => {
            const dateEntered = new Date(refs.input.value);
            const targetDate = dateEntered.getTime()
            const currentDate = new Date();
    
            const ms = targetDate - currentDate;
            const time = this.convertMs(ms);
            console.log(time);
            
            this.onTick(time);    
        }, 1000);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = this.pad(Math.floor(ms / day));
        // Remaining hours
        const hours = this.pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
    }
}

const timer = new Timer({
    onTick: updateTextContent,
});


function updateTextContent({ days, hours, minutes, seconds }) {
    refs.timerDays.textContent = `${days}`;
    refs.timerHours.textContent = `${hours}`;
    refs.timerMinutes.textContent = `${minutes}`;
    refs.timerSeconds.textContent = `${seconds}`;
}

refs.btnStart.addEventListener('click', timer.start.bind(timer));




// const timer = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         if (this.isActive) {
//             return;
//         }

//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const dateEntered = new Date(refs.input.value);
//             const targetDate = dateEntered.getTime()
//             const currentDate = new Date();
    
//             const ms = targetDate - currentDate;
//             const time = convertMs(ms);
//             console.log(time);
            
//             updateTextContent(time);
            
//         }, 1000);
//     }
// };



// function pad(value) {
//     return String(value).padStart(2, '0');
// };
  
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
