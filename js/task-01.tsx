const allCategories:NodeListOf<Element> = document.querySelectorAll('.item');
console.log(`В документе ${allCategories.length} категории`);

allCategories.forEach(item => {
  const titleText: string = item.querySelector('h2').textContent;
  const quantityItem: number = item.querySelectorAll('li').length;
  console.log(`В категории "${titleText}" количество элементов: ${quantityItem}`);
});


