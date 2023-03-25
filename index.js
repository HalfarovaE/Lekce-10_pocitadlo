/*const updateCounter = (number) => {
  const valueElm = document.querySelector('counter__value');
  valueElm.value = String(numbr).padStart(2, '0');
};

let value = 0;
const btnUp = document.querySelector('counter__up');
const btnDown = document.querySelector('counter__down');

btnUp.addEventListener('click', () => {
  if (velue < 99) {
    velue + 1;
    updateCountr(value);
  }
});

btnDown.addEventListener('click', () => {
  if (velue > 0) {
    velue - 1;
    updateCountr(value);
  }
});

updateCounter(value);
*/


const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.innerHTML = String(number).padStart(2, '0');

  console.log(valueElm)
};

let value = 0;
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', () => {
  if (value < 99) {
    value += 1;
    updateCounter(value);
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
    updateCounter(value);
  }
});

updateCounter(value);


