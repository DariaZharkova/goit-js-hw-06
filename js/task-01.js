const categories = document.querySelector("#categories");
const category = categories.querySelectorAll(".item");

// console.log(category);
console.log(`Number of categories: ${category.length}`);

category.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
