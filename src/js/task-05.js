const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEL = document.querySelector("#name-output");
console.log(spanEL);
inputEl.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);
  
  if ((event.currentTarget.value.trim() !== "")){
    spanEL.textContent = event.currentTarget.value;
  }else{
   spanEL.textContent = "Anonymous"
}});