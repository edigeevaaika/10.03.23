// найти все элементы
const newItemInpt = document.querySelector("#new-item");
const itemsList = document.querySelector("#items");
const addItemBtn = document.querySelector("#add-item");

function removeItem() {
  this.parentElement.remove();
}
