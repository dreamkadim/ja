import Notiflix from 'notiflix';

const firstDelay = parseInt(document.querySelector('input[name=delay]').value);
const delay = parseInt(document.querySelector('input[name=step]').value);
const amountInput = parseInt(
  document.querySelector('input[name=amount]').value
);

const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', () => {
  setTimeout(() => {
    for (let i = 0; i < amountInput; i++) {
      console.log(i);
      // return createPromise;
    }
  }, firstDelay);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        //Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

//starting code
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
