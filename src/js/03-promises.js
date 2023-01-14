import Notiflix from 'notiflix';

const delayInput = document.getElementsByName('delay');
const stepInput = document.getElementsByName('step');
const amountInput = document.getElementsByName('amount');
const submitBtn = document.querySelector('button[type=submit]');

submitBtn.addEventListener('click', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    //Fulfill
    return new Promise(resolve => {
      setTimeout(() => resolve(position), delay);
      console.log('promise succedes!');
    });
  } else {
    // Reject
    return new Promise(reject => {
      setTimeout(() => reject(position), delay);
      console.log('promise was rejected!');
    });
  }
}

//starting code
createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });

//TEST
/*
const isSuccess = true;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Succes!! Value passed to resolve function');
      console.log('Promise has succeded;)');
    } else {
      reject('Error! passed to reject the function');
      console.log('Promise has been rejected;)');
    }
  }, 2000);
});

promise.then(
  value => {
    console.log('onResolve call inside promise.then');
    console.log('value');
  },
  error => {
    console.log('onReject call inside promise.then()');
    console.log(error);
  }
);
*/
