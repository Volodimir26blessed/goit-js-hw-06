const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const resultElementList = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;
  return element;
});
document.body.append(...resultElementList);

// 2 вариант рішення задачі

// const ingredientList = document.getElementById("ingredients");

// function createIngredients(ingredients) {
//   ingredients.forEach((ingredient) => {
//     const ingredientLi = document.createElement("li");
//     ingredientLi.classList.add("item");
//     ingredientLi.textContent = ingredient;
//     ingredientList.append(ingredientLi);
//   });
// }
// createIngredients(ingredients);
