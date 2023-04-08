import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Notiflix from 'notiflix';
const form = document.querySelector('.form');


form.addEventListener('submit', onSubmitForm);


function onSubmitForm(event) {
  event.preventDefault();

  // let delay = Number(formRef.delay.value);
  const { delay, step, amount } = event.currentTarget.elements;
  if (delay.value < 0 || step.value < 0 || amount.value < 0) {
    Notiflix.Notify.warning(`❗ Please enter a positive number`);
  } else {
    for (let i = 0; i <= amount.value; i ++) {
      let position = i + 1;
      const delays = Number(delay.value) + step.value * i;
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      // delay += Number(formRef.step.value);
    }
  }
   event.currentTarget.reset();
}


function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(obj);
      } else {
        // Reject
        reject(obj);
      }
    }, delay);
  });
}
