const colors = [
  'yellow',
  'green',
  'blue',
  '#f15025',
  'rgba(125, 125, 125, 0.5'
];

const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
  let random = Math.floor(Math.random() * colors.length); // generate rnd number between 0-4 that is the # of items in the array colors
  console.log(random);
  document.body.style.backgroundColor = colors[random];
})