// filter buttons
(function(){
  // select all buttons
  const filterBtn = document.querySelectorAll('.filter-btn');
  // console.log("Logged Output: filterBtn", filterBtn)
  filterBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
      // prevent the default refresh of the page
      event.preventDefault();
      // use of .dataset property to access all data- of interest
      // in this case data-filter becomes filter, omitting data-
      const value = event.target.dataset.filter;
      // console.log(value);
      // select all items - nodeList 12
      const items = document.querySelectorAll('.store-item');
      // console.log(items);
      items.forEach(item => {
        if (value==='all') {
          item.style.display = 'block';
        }
        else {
          if (item.classList.contains(value)) {
            item.style.display = 'block';
          }
          else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
})();

// search input
(function(){
  // target searchbox
  const search = document.getElementById('search-item');
  search.addEventListener('keyup', ()=>{
    // trim excludes the initial/ending spaces
    let value = search.value.toLowerCase().trim();
    // console.log(value);
    const items = document.querySelectorAll('.store-item');
    items.forEach(item => {
      let type = item.dataset.item;
      // console.log(type);
      // if(type.includes(value)){
      //   item.style.display = 'block';
      // }
      // else {
      //   item.style.display = 'none';
      // }
      let length = value.length;
      let match = type.slice(0,length);
      // console.log('Value: ', value);
      // console.log('Match: ', match);
      if(value==match) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
})();