import Notiflix from 'notiflix';

const formElement = document.querySelector('.form');
const submitBtn = formElement.querySelector('button[type=submit]');
const firstDelay = formElement.delay;
const delayStep = formElement.step;
const amount = formElement.amount;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, Number(delayStep.value));
  });
}

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  console.log(Number(amount.value));
  for (i = 1; i <= Number(amount.value); i++) {
    setTimeout(() => {
      console.log(i);
      createPromise(i, Number(delayStep.value))
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
    }, i * Number(firstDelay.value));
  }
});
