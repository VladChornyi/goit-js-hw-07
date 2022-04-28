// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой, в
// спане должна отображаться строка 'незнакомец'.
const outputNode = document.querySelector('#name-output');
const inputNode = <HTMLInputElement>document.querySelector('#name-input') ;
inputNode.addEventListener('input', newEvent => outputNode.textContent = inputNode.value.length === 0 ? 'незнакомец' :  inputNode.value);