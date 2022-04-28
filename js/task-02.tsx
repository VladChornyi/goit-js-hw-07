const ingredients: string[] = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listEl: Element = document.querySelector('#ingredients');
const listOfingredients: HTMLLIElement[] = ingredients.map(item => {
  const itemOfingredients: HTMLLIElement = document.createElement('li');
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
