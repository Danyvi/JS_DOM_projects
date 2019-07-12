(function(){

  // customers
  let customers = [];
  let index = 0;

  // object constructor function
  function Customer(name, img, text) {
    this.name = name;
    this.img = img;
    this.text = text;
  }

  // create customer function
  function createCustomer(name,img,text) {
    //full img
    let fullImg = `./img/customer-${img}.jpg`;
    // create a new customer instance
    const customer = new Customer(name, fullImg, text);
    // add to all customers
    customers.push(customer);
  }

  createCustomer('john', 1, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptates?`);

  createCustomer('dana', 2, `Lorem ipsum dolor sit amet.`);

  createCustomer('stef', 3, `Lorem ipsum dolor sit amet consectetur adipisicing elit.`);

  createCustomer('andrei', 4, `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sint aperiam recusandae doloremque delectus.`);

  // console.log(customers);

  // since we receive back a nodeList we loop
  document.querySelectorAll('.btn').forEach((item)=>{
    item.addEventListener('click', (event)=> {
      event.preventDefault();
      // console.log(event.target);
      // check to see if we clicked on font awesome icon
      if (event.target.parentElement.classList.contains('prevBtn')){
        if (index===0){
          index=customers.length;
        }
        index--;
        //targeting of the customer image
        document.getElementById('customer-img').src = customers[index].img;
        //targeting of the customer name
        document.getElementById('customer-name').textContent = customers[index].name;
        //targeting of the customer text
        document.getElementById('customer-text').textContent = customers[index].text;
      }
      if (event.target.parentElement.classList.contains('nextBtn')){
        // check if the item is the last item in the array
        if (index === customers.length - 1){
          index=-1;
        }
        index++;
        //targeting of the customer image
        document.getElementById('customer-img').src = customers[index].img;
        //targeting of the customer name
        document.getElementById('customer-name').textContent = customers[index].name;
        //targeting of the customer text
        document.getElementById('customer-text').textContent = customers[index].text;
      }
    })
  })

})();