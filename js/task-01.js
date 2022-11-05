
// ------ Number of categories-------
const arreyItem = categories.querySelectorAll('li.item');
console.log(`Number of categories: ${arreyItem.length}`);
// ------- Amount Elements ----------
arreyItem.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elemets: ${element.querySelectorAll('li').length}`);  
});

