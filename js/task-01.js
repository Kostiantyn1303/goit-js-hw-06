const categoriesListEl = document.querySelector("#categories");
const totalnumberOfCategories = categoriesListEl.children;
console.log("Number of categories:", totalnumberOfCategories.length);

const categoriesItemEl = document.querySelectorAll(".item");

const categoryEl = categoriesItemEl.forEach((el) => {
  const category = el.firstElementChild.textContent;
  const elements = el.lastElementChild.children.length;
  console.log(`Category: ${category}
  Elements: ${elements}`);
});
