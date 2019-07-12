const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    let number = btn.dataset.num;
    // console.log(number)
    screen.value += number;
  });
});

equalBtn.addEventListener('click', ()=> {
  if(screen.value==="") {
    alert('Input is empty!');
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
})

clearBtn.addEventListener('click', ()=> {
  screen.value="";
})