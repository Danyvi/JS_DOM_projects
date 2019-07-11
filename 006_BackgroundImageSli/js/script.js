(function(){
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
  ];

  // setup the counter
  let counter = 0;
  // select buttons (we are getting back a node list)
  const btn = document.querySelectorAll('.btn');
  console.log("Logged Output: btn", btn)
  // now we want to loop through the buttons and add an event listener to each items
  btn.forEach((button)=>{
    button.addEventListener('click', (event)=>{
      // get event target
      let value = event.target;
      // console.log("Logged Output: vale", value)

      if(value.classList.contains('btn-left')) {
        counter --;
        // if the counter is <0 it start at the end of array
        if (counter<0) {
          counter = pictures.length - 1;
        }
        // console.log("Logged Output: counter", counter)
        document.querySelector('.img-container').style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }

      if(value.classList.contains('btn-right')) {
        counter ++;
        // if the counter is >4 it start at the end of array
        if (counter>pictures.length - 1) {
          counter = 0;
        }
        // console.log("Logged Output: counter", counter)
        document.querySelector('.img-container').style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
      }
    })
  })
})();