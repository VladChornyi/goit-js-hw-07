const allCategories = document.querySelectorAll('.item');
console.log(`В документе ${allCategories.length} категории`);

allCategories.forEach(item => {
  const titleText = item.querySelector('h2').textContent;
  const quantityItem = item.querySelectorAll('li').length;
  console.log(`В категории "${titleText}" количество элементов: ${quantityItem}`);
});
