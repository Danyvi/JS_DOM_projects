(function(){

  // select options
  const services = [
    {
      value:1,
      title: "Great - 20%"
    },
    {
      value:2,
      title: "Ok - 10%"
    },
    {
      value:3,
      title: "Bad - 2%"
    },
  ];

  // add select options to the select element
  services.forEach(service=>{
    const option = document.createElement('option');
    option.textContent = service.title;
    option.value = service.value;

    document.getElementById('input-service').appendChild(option);
  });
  // get all the values
  const form = document.getElementById('tip-form');
  const amount = document.getElementById('input-bill'); // bill amount
  const users = document.getElementById('input-users'); // how many people
  const service = document.getElementById('input-service'); // tip %

  //customer feedback
  const feedback = document.querySelector('.feedback');
  const loader = document.querySelector('.loader');
  const results = document.querySelector('.results');

  // submit form
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let bill = amount.value;
    let people = users.value;
    let quality = service.value;

    if (
      (bill === "" || bill <="0") ||
      (people === "" || people <="0") ||
      quality ==="0"
      ) {
      feedback.classList.add('showItem', 'alert-danger');
      feedback.innerHTML = `
      <p>Please check the values</p>
      <p>Bill amount cannot be les than zero</p>
      <p>People sharing the bill cannot be less than zero</p>
      <p>Service has to be selected</p>
      `;
      setTimeout(() => {
        feedback.classList.remove('showItem', 'alert-danger');
      }, 10000);
    } else {
      feedback.classList.add('showItem', 'alert-success');
      feedback.innerHTML = `
      <p>calculating...</p>
      `;
      loader.classList.add('showItem');
      setTimeout(() => {
        loader.classList.remove('showItem');
        feedback.classList.remove('showItem','alert-success');
        showResults(bill, people, quality);
        clearForm();
      }, 4000);
    }
  });


  function showResults(bill, people, quality) {
    let percent = 0;
    if(quality==='1') {
      percent=0.2;
    } else if (quality ==='2'){
      percent=0.1;
    } else if (quality='3') {
      percent = 0.02;
    }

    let tipAmount = parseInt(bill)*percent;
    let total = parseInt(bill) + tipAmount;
    let person = total/parseInt(people);

    results.classList.add('showItem');
    document.getElementById('tip-amount').textContent = tipAmount;
    document.getElementById('total-amount').textContent = total;
    document.getElementById('person-amount').textContent = person.toFixed(2);


  }

  function clearForm() {
    amount.value = "";
    users.value = "";
    service.value = "";
  }
})();