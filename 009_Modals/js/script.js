//lightbox

(function(){
  // all images
  let imageList = [];
  let counter = 0;

  const images = document.querySelectorAll('.store-img');
  const container = document.querySelector('.lightbox-container');
  const item = document.querySelector('.lightbox-item');
  const closeIcon = document.querySelector('.lightbox-close');
  const btnLeft = document.querySelector('.btnLeft');
  const btnRight = document.querySelector('.btnRight');

  // add all images to the array
  images.forEach(img=>{
    imageList.push(img.src);
  });
  // console.log(imageList);

  // open modal
  images.forEach(img=>{
    img.addEventListener('click', (event)=>{
      //show modal
      container.classList.add('show');

      // get src
      let src = event.target.src;
      // console.log("Logged Output: src", src);
      // index of imageList array
      counter = imageList.indexOf(src);
      // console.log("Logged Output: counter", counter);
      // show modal with an image
      item.style.backgroundImage=`url(${src})`;
    });
  });

  // close modal
  closeIcon.addEventListener('click', () => {
    container.classList.remove('show');
  });
  // left button
  btnLeft.addEventListener('click', ()=> {
    counter --;
    if (counter<0){
      counter=imageList.length-1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    // console.log(counter);
  });

  // right button
  btnRight.addEventListener('click', ()=> {
    counter ++;
    if (counter > imageList.length-1){
      counter=0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
    // console.log(counter);
  });
})();