(function(){
  let counterValue = 0;

  const buttons = document.querySelectorAll('.counterBtn');

  const counter = document.getElementById('counter');
  // forEach (array method) used with a nodeList
  buttons.forEach(btn=> {
    btn.addEventListener('click', (event)=>{
      // element that we click
      const value = event.target;
      // check if clicked element has prevBtn class
      if (value.classList.contains('prevBtn')){
        counterValue--;
      } else if (value.classList.contains('nextBtn')) {
        counterValue++;
      }
      counter.textContent = counterValue;
      // change color
      if (counterValue===0) {
        counter.style.color = '#333333';
      } else if (counterValue <0) {
        counter.style.color = '#f6511d';
      } else if (counterValue >0) {
        counter.style.color = '#7fb800';
      }
    })
  })
})();