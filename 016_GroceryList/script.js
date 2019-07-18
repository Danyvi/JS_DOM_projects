// variables
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');

// event listeners
submit.addEventListener('click', addItem);

// functions

// add item
function addItem(event) {
  event.preventDefault();
  let value = input.value;
  if(value==="") {
    showAction(addItemsAction, "Please add grocery item", false);
  } else {
    showAction(addItemsAction, `${value} added to the list`, true);
    createItem(value);
  }
}
// show action
function showAction(element, text, value) {
  if(value===true){
    element.classList.add('success');
    element.innerText = text;
    input.value="";
    setTimeout(()=>{
      element.classList.remove('success');
    },3000)
  } else {
    element.classList.add('alert');
    element.innerText = text;
    input.value="";
    setTimeout(()=>{
      element.classList.remove('alert');
    },3000)
  }
}
// create item
function createItem(value) {
  let parent = document.createElement('div');
  parent.classList.add('grocery-item');

  // let title = document.createElement('h4');
  // title.classList.add('grocery-item__title');
  /** Instead of create every element we use innerHTML */
  parent.innerHTML = `
  <h4 class="grocery-item__title">${value}</h4>
  <a href="#" class="grocery-item__link"
    ><i class="far fa-trash-alt"></i
  ></a>
  `;
  list.appendChild(parent);
}