const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const allIngridients = document.querySelector("#ingredients");

for (const ingredientsAdd of ingredients) {
  
  const item = document.createElement("li");

  item.textContent = ingredientsAdd;
  item.classList.add("item");
  allIngridients.append(item);

};
