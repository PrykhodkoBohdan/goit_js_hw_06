const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");
const wrrap = document.querySelector("#counter");

let counterValue = 0;
 const incrementValue = () => {

counterValue += 1;

value.textContent = counterValue;
 };
 const decrementValue = () => {

    counterValue -= 1;
    
    value.textContent = counterValue;
     };

incrementBtn.addEventListener('click', incrementValue);
decrementBtn.addEventListener('click', decrementValue);