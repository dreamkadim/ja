import Notiflix from 'notiflix';

const firstDelay = parseInt(document.querySelector('input[name=delay]').value);
const delay = parseInt(document.querySelector('input[name=step]').value);
const amount = parseInt(document.querySelector('input[name=amount]').value);

const submitBtn = document.querySelector('button[type=submit]');

// event watching submitBtn and calling function createPromise "amount" times
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  setTimeout(() => {
    for (let position = 1; position <= amount; position++) {
      console.log(position);
      return createPromise();
    }
  }, firstDelay);
});

// // test event - comment Ln9-18
// submitBtn.addEventListener('click', e => {
//   e.preventDefault();
//   for (let position = 1; position <= amount; position++) {
//     console.log(position);
//   }
// });

// function creating promise with random result, with a delay that user put in' delay'
// no matter the result promise gives object {position, delay}
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

// what happens when promise is fulfilled and what when rejected
createPromise()
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });
