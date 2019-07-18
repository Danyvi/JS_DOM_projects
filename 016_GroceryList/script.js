// variables
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');

// event listeners
submit.addEventListener('click', addItem);
document.addEventListener('DOMContentLoaded', displayStorage);
clear.addEventListener('click', removeItems);
list.addEventListener('click', removeSingleItem);


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
    updateStorage(value);
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
// update storage
function updateStorage(value) {
  let groceryList;
  // let exists = localStorage.getItem('groceryList');

  groceryList = localStorage.getItem('groceryList')
    ? JSON.parse(localStorage.getItem('groceryList'))
    : [];

  // long version of ternary operator above
  // if (exists) {
  //   groceryList = JSON.parse(localStorage.getItem('groceryList'))
  // } else {
  //   groceryList=[];
  // }

  groceryList.push(value);
  localStorage.setItem('groceryList', JSON.stringify(groceryList));
}

// display local storage function
function displayStorage() {
  let exists = localStorage.getItem('groceryList');

  if (exists) {
    let storageItems = JSON.parse(localStorage.getItem('groceryList'));
    storageItems.forEach(item=>{
      createItem(item)
    })
  } else {
    groceryList=[];
  }
}

// remove all items
function removeItems() {
  // delete from local storage
  localStorage.removeItem('groceryList');
  // delete from DOM
  let items = document.querySelectorAll('.grocery-item');
  if(items.length>0) {
    showAction(displayItemsAction, 'All items deleted', false);
    items.forEach(item=>list.removeChild(item))
  } else {
    showAction(displayItemsAction, 'No more items to delete', true);
  }
}

/**
 * To delete single item we make use of bubbling since we are adding item dynamically with JS
 * instead of placing an addEventListener on the actual link
 * <a href="#" class="grocery-item__link"><i class="far fa-trash-alt"></i></a>
 * when we ave the <div class="grocery-list></div>" we can add an event listener to the list
 * and then we can check when we are clicking on the link
 */

// remove single item
function removeSingleItem(event) {
  event.preventDefault();
  // console.log(event.target);
  // console.log(event.target.parentElement);
  let link = event.target.parentElement;
  // console.log("Logged Output: removeSingleItem -> link", link)
  if(link.classList.contains('grocery-item__link')){
    // previous element sibling <h4 class='grocery-item__title'>text</h4>
    let text = link.previousElementSibling.innerHTML;
    // parent element <div class='grocery-item'></div>
    let groceryItem = event.target.parentElement.parentElement;
    // remove groceryItem from the list
    list.removeChild(groceryItem);
    showAction(displayItemsAction, `${text} removed from the list`, true);
    // remove groceryItem from local storage
  }
}