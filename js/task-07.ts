// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.
const inputNode = <HTMLInputElement>document.querySelector('#font-size-control');
const spanNode = <HTMLSpanElement>document.querySelector('#text');
console.log(spanNode.style.fontSize);
inputNode.addEventListener('input', e => (spanNode.style.fontSize = inputNode.value + 'px'));
