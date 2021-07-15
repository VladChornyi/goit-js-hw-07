// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterNode = document.querySelector('#value')


const incrementBtn = document.querySelector('#counter').lastElementChild;

const decrementBtn = document.querySelector('#counter').firstElementChild;

incrementBtn.addEventListener('click', event => counterNode.textContent = +counterNode.textContent + 1 );

decrementBtn.addEventListener('click', event => counterNode.textContent = +counterNode.textContent - 1 );