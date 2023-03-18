const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1. знаходимо по селектору елемент з айди
// 2. map() используется для применения функции к каждому элементу итерируемого объекта, возвращает массив, не изменяя исходній
// 3. створюємо елементі li
// 4.  створюємо клас item
// 5 добавляємо текст контент
// 6 повертаємо li з кассами і текстом
// 7 добавляємо ...items
const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;

  return listItem;
});

console.log(items);

ingredientsList.append(...items);
//  document.querySelector('#ingredients'); получение єлемента по селектору
//* Добавление по одному элементу

// const listItem1 = document.createElement('li');
// listItem1.classList.add('item');
// listItem1.textContent = 'Potatoes';

// const listItem2 = document.createElement('li');
// listItem2.classList.add('item');
// listItem2.textContent = 'Mushrooms';

// const listItem3 = document.createElement('li');
// listItem3.classList.add('item');
// listItem3.textContent = 'Garlic';

// const listItem4 = document.createElement('li');
// listItem4.classList.add('item');
// listItem4.textContent = 'Tomatos';

// const listItem5 = document.createElement('li');
// listItem5.classList.add('item');
// listItem5.textContent = 'Herbs';

// const listItem6 = document.createElement('li');
// listItem6.classList.add('item');
// listItem6.textContent = 'Condiments';

//* Загрузка по одному элементу

// listEl.insertBefore(listItem1, listEl.children[0]);
// listEl.insertBefore(listItem2, listEl.children[1]);
// listEl.insertBefore(listItem3, listEl.children[2]);
// listEl.insertBefore(listItem4, listEl.children[3]);
// listEl.insertBefore(listItem5, listEl.children[4]);
// listEl.insertBefore(listItem6, listEl.children[5]);

//* Общая загрузка

// const listEl = document.querySelector('#ingredients');
// listEl.prepend(
//   listItem1,
//   listItem2,
//   listItem3,
//   listItem4,
//   listItem5,
//   listItem6,
// );