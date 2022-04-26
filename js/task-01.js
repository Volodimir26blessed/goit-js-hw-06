// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const calcCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${calcCategoriesEl.length} `);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).»

const categoriesEl = [...calcCategoriesEl]
  .map(
    (categories) =>
      `Сategoty: ${categories.children[0].textContent}
 Elements: ${categories.children[1].children.length} `
  )
  .join("\n");
console.log(categoriesEl);
