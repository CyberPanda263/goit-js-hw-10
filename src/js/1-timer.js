import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
        iziToast.show({
          message: 'Please choose a date in the future',
          position: 'topCenter',
          backgroundColor: 'rgb(239, 64, 64)',
          theme: 'dark',
        });
      }else{
        start.disabled = false;
        start.classList.remove('is-disable');
      }
    },
  };

  start.disabled = true;
  start.classList = "is-disable";

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

flatpickr(getDate, options);

start.addEventListener("click", event => {
    start.disabled = true;
    start.classList = "is-disable";
    getDate.disabled = true;
    ms = userSelectedDate.getTime() - date.getTime();

    const counting = setInterval(() => {
      const getingTime = convertMs(ms);
      Object.keys(getingTime).forEach(key => {
          const lengh = getingTime[key];
          document.querySelector(`[data-${key}`).innerHTML = lengh.toString().length != 2 ? `0${getingTime[key]}`: getingTime[key];
      })
      ms -= 1000;
  }, 1000);
  
  setTimeout(() => {
    clearInterval(counting);
    start.disabled = false;
    getDate.disabled = false;
    start.classList.remove('is-disable');
  }, ms + 1000);

})
  