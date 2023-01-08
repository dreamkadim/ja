import flatpickr from 'flatpickr';

// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
const today = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  weekNumbers: true,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= today.getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      console.log(selectedDates[0]);
      startBtn.disabled = false;
    }
  },
};

const fp = flatpickr(input, options);
