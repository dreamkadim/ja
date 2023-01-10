import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days');
const dataHours = document.querySelector('span[data-hours');
const dataMinutes = document.querySelector('span[data-minutes');
const dataSeconds = document.querySelector('span[data-seconds');
startBtn.disabled = true;
const today = new Date();

// function that converts miliseconds into days/hours/minutes/seconds
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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  weekNumbers: true,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= new Date().getTime()) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.warning('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      Notiflix.Notify.info('Press START to fire the countdown');
      startBtn.disabled = false;
    }
  },
};

// add leading zero to single digit numbers
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const fp = flatpickr(input, options);

const startCountdown = () => {
  console.log('Let the countdown begin!');
  startBtn.disabled = true;

  const timerId = setInterval(() => {
    let timeRemaining = fp.selectedDates[0].getTime() - new Date().getTime();
    let countDown = convertMs(timeRemaining);
    //add leading zero
    dataDays.textContent = addLeadingZero(countDown.days);
    dataHours.textContent = addLeadingZero(countDown.hours);
    dataMinutes.textContent = addLeadingZero(countDown.minutes);
    dataSeconds.textContent = addLeadingZero(countDown.seconds);
    // console.log(fp.selectedDates[0].getTime() - new Date().getTime());
    if (timeRemaining < 1001) {
      clearInterval(timerId);
      Notiflix.Notify.success('Countdown finished! 😀');
    }
  }, 1000);
};
startBtn.addEventListener('click', startCountdown);
