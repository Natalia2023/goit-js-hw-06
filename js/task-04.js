// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const refs = {
    openDescrement: document.querySelector('[data-action="decrement"]'),
    closeIncrement:document.querySelector('[data-action="increment"]'),
    value:document.querySelector('#value'),
}
 
   let counterValue = 0;
// метод головний вірний
// refs.openDescrement.addEventListener('click', () => {
//     counterValue -= 1;
//     value.textContent = counterValue;
// });
// refs.closeIncrement.addEventListener('click', () => {
//     counterValue += 1;
//     value.textContent = counterValue;
// });


// метода 2

refs.openDescrement.addEventListener('click', resultIncrement);
refs.closeIncrement.addEventListener('click', resultDescrement);

function resultIncrement() {
    counterValue -= 1;
    value.textContent = counterValue;
};

function resultDescrement() {
    counterValue += 1;
    value.textContent = counterValue;
};


//? як досткатися до властивості тегу HTML
//? id - #header-btn (через решітку "хештег")
//? class - .header-btn (через крапку)
//? атрибут - [type, data-action], приклад [type="button"]
