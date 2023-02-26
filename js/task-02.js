const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListEl = document.querySelector("#ingredients");

const createIngredientsList = (options) => {
  return options.map((option) => {
    const ingridientEl = document.createElement("li");
    ingridientEl.classList.add("item");
    ingridientEl.textContent = option;
    return ingridientEl;
  });
};
const items = createIngredientsList(ingredients);
ingredientsListEl.append(...items);
console.log(ingredientsListEl);
