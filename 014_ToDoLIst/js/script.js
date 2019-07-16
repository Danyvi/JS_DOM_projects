// get elements

const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector('.item-list');
const clearBtn = document.getElementById('clear-list');
const feedback = document.querySelector('.feedback');

// let itemData = [];
let itemData = JSON.parse(localStorage.getItem('list')) || [];
// console.log(itemData);

const handleItem = (textValue)=>{
  // console.log(textValue);
  // console.log(itemList);
  const items = itemList.querySelectorAll('.item');
  // console.log(items);
  items.forEach((item)=>{
    if(item.querySelector('.item-name').textContent===textValue) {
      // 'complete' event listener
      item
        .querySelector('.complete-item')
        .addEventListener('click', function() {
          item.querySelector('.item-name').classList.toggle('completed');
          // console.log(this);
          this.classList.toggle('visibility');
      });
      // 'edit' event listener
      item.querySelector('.edit-item').addEventListener('click', function(){
        itemInput.value = textValue;
        itemList.removeChild(item);
        // console.log(itemData);
        itemData = itemData.filter(item => {
          return item !== textValue;
        });
        // console.log(itemData);
        // local storage
        localStorage.setItem('list', JSON.stringify(itemData));
      });
      // 'delete' event listener
      item.querySelector('.delete-item').addEventListener('click', function(){
        itemList.removeChild(item);
        itemData = itemData.filter(item => {
          return item !== textValue;
        });
        // local storage
        localStorage.setItem('list', JSON.stringify(itemData));
        showFeedback('item deleted', 'success');
      });
    }
  });
}

if (itemData.length>0) {
  itemData.forEach(singleItem => {
    itemList.insertAdjacentHTML('beforeend',
    `
    <div class="item my-3">
      <h5 class="item-name text-capitalize">${singleItem}</h5>
      <div class="item-icons">
        <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
        <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
        <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
      </div>
    </div>
    `
    );
    handleItem(singleItem);
  });
}


// showFeedback function
const showFeedback = (text, action) => {
  feedback.classList.add('showItem', `alert-${action}`);
  feedback.innerHTML = `<p>${text}</p>`;
  setTimeout(() => {
    feedback.classList.remove('showItem', `alert-${action}`);
  }, 3000);
}

// addItem function
const addItem = (value) => {
  const div = document.createElement('div');
  div.classList.add('item', 'my-3');
  div.innerHTML = `
  <h5 class="item-name text-capitalize">${value}</h5>
  <div class="item-icons">
    <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
    <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
    <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
  </div>
  `;
  itemList.appendChild(div);
}


// Form submission
itemForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  const textValue = itemInput.value;
  if (textValue===""){
    showFeedback('Please enter valid value', 'danger');
  } else {
    //add item
    addItem(textValue);
    // clear form
    itemInput.value="";
    // add to item array
    itemData.push(textValue);
    // console.log("Logged Output: itemData", itemData)
    // local storage
    localStorage.setItem('list', JSON.stringify(itemData));
    // add event listeners to icons
    handleItem(textValue);
  }
});

clearBtn.addEventListener('click', ()=>{
  itemData = [];
  // local storage
  localStorage.removeItem('list');
  const items = itemList.querySelectorAll('.item');
  if (items.length >=0) {
    items.forEach(item=> {
      itemList.removeChild(item);
    });
  }
});