const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredList = document.querySelector('ul')
const addIngridients = ingredients.forEach((item) => {
  const itemEl = document.createElement('li')
  itemEl.textContent = item;
  ingredList.appendChild(itemEl)
})
 