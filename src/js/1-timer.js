import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const getDate = document.querySelector("#datetime-picker");
const start = document.querySelector("button");

const date = new Date();
let userSelectedDate;
let ms;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];
      if(userSelectedDate < date) {
        window.alert("Please choose a date in the future");
      }else{
        start.disabled = false;
      }
    },
  };

start.disabled = true;

flatpickr(getDate, options);

start.addEventListener("click", event => {
    start.disabled = true;
    getDate.disabled = true;
    ms = userSelectedDate.getTime() - date.getTime();
    const timer = setInterval(() => {
        let days;
        let hours;
        let minutes;
        let seconds;
        convertMs(ms);
        console.log(`${days} ${hours} ${minutes} ${seconds}`);
    }, 1000);
})

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

const timer = setInterval(() => {
    convertMs(ms)
}, 1000);
  