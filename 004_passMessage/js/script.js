// IIFE Immediate Invoked Function Expression; Not pollute global scope
(function(){

  document.getElementById('message-form').addEventListener('submit', (event)=>{
    // prevent default refesh of the page on submit
    event.preventDefault();
    // getting input value
    let message = document.getElementById('message');
    const value = message.value;

    // checking for empty values
    if (value===''){
      const feedback = document.querySelector('.feedback');
      feedback.classList.add('show');
      setTimeout(() => {
        feedback.classList.remove('show');
      }, 2000);
    } else {
      // change value
      document.querySelector('.message-content').textContent = value;
      message.value = '';
    }
  })
})();