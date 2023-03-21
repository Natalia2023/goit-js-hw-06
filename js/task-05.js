// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};


refs.input.addEventListener('input',onInputBlut);

function onInputBlut(event) {
    console.log(event.currentTarget.value);
    refs.span.textContent = event.currentTarget.value;
}







//? як досткатися до властивості тегу HTML
//? id - #header-btn (через решітку "хештег")
//? class - .header-btn (через крапку)
//? атрибут - [type, data-action], приклад [type="button"]
