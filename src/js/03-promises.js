import Notiflix from 'notiflix';

const formElement = document.querySelector('.form');
const submitBtn = formElement.querySelector('button[type=submit]');
const firstDelay = formElement.delay;
const delayStep = formElement.step;
const amount = formElement.amount;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(position);
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// add event to button
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(firstDelay.value);
  console.log(parseInt(firstDelay.value));
  // console.log(Number(amount.value));
  let delay = parseInt(firstDelay.value);
  for (let i = 1; i <= Number(amount.value); i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay = delay + parseInt(delayStep.value);
  }
});
