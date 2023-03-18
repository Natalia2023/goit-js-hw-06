"use strict";
// document.querySelectorAll - отримуємо колекцію елементів(масив посилань)
// totalCategories.length - знаходимо його довжинну
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories:  ${totalCategories.length}.`);
//  розпилюємо item
const categoriesArray = [...totalCategories]
   .map(
     categories => `Categories: ${categories.children[0].textContent}
     Elements: ${categories.children[1].children.length}`
  )
   .join("\n");
 console.log(categoriesArray);
//  map  - возвр. новый массив, где каждый элемент является результатом callback функции.