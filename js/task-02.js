const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const listEl = document.querySelector('#ingredients');

const ingredList = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, '');

listEl.innerHTML = ingredList;







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