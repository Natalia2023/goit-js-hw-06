// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
});
// Кратко Свойство dataset позволяет считывать или устанавливать любые дата-атрибуты на HTML-элементе. 
// Дата-атрибут — это пользовательский атрибут на элементе, название которого начинается с data- , 
// например data-testid . 
// Дата атрибуты используются, чтобы хранить значения на элементах в HTML.