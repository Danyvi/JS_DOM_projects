// show cart
(function(){
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', ()=>{
    cart.classList.toggle('show-cart');
  });
})();

// add items to the cart
(function(){
  const cartBtn = document.querySelectorAll('.store-item-icon');
  cartBtn.forEach(btn=>{
    btn.addEventListener('click', (event)=>{
      // console.log(event.target);
      if (event.target.parentElement.classList.contains('store-item-icon')){
        // console.log(event.target.parentElement);
        // console.log(event.target.parentElement.parentElement);
        // console.log(event.target.parentElement.previousElementSibling);
        // console.log(event.target.parentElement.previousElementSibling.src);
        let fullPath = event.target.parentElement.previousElementSibling.src;
        // position of the img string
        let pos = fullPath.indexOf('img')+3; // start of file name 3 character after 'img'
        // console.log("Logged Output: pos", pos)
        // partial path
        let partPath = fullPath.slice(pos); // ex: /cake-1.jpeg
        // console.log("Logged Output: partPath", partPath)
        const item = {};
        item.img = `./img-cart${partPath}`
        // console.log("Logged Output: item.img", item.img);
        let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent; // use of the [] because it returns a node list
        // console.log("Logged Output: name", name);
        item.name = name;
        let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
        // console.log(price);
        let finalPrice = price.slice(1).trim()
        // console.log("Logged Output: finalPrice", finalPrice)
        item.price = finalPrice;
        // console.log(item);

        const cartItem = document.createElement('div');
        cartItem.classList.add(
          'cart-item',
          'd-flex',
          'justify-content-between',
          'text-capitalize',
          'my-3'
          );

        cartItem.innerHTML =
        `
          <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
          <div class="item-text">
            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
          </div>
          <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fas fa-trash"></i>
          </a>
        </div>
        `;

        // select cart
        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');

        cart.insertBefore(cartItem, total);
        alert('Item added to the cart');
        showTotals();
      }
    });
  });

  function showTotals() {
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(item=>{
      total.push(parseFloat(item.textContent));
    })
    const totalMoney = total.reduce((total, item)=>{
      total+=item;
      return total;
    },0);
    const finalMoney = totalMoney.toFixed(2);
    // console.log(finalMoney);
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
  }
})();