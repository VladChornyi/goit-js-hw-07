const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listEl = document.querySelector('#ingredients');
const listOfingredients = ingredients.map(item => {
  const itemOfingredients = document.createElement('li');
  itemOfingredients.textContent = item;

  return itemOfingredients;
});

listEl.append(...listOfingredients);

// const ingredList = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, '');

// listEl.append(...ingredList);

// const ingredList = document.querySelector('#ingredients');
// const addIngridients = function (arr) {
//   arr.forEach((item) => {
//     const itemEl = document.createElement('li');
//     itemEl.textContent = item;
//     ingredList.appendChild(itemEl);
//   })
// };
// addIngridients(ingredients);
// console.log(addIngridients(ingredients));
