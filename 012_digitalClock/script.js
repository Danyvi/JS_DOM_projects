const convertFormat = (time) => {
  let format = 'AM';
  if (time>=12) {
    format = 'PM';
  }
  return format;
}

const checkTime = (time) => {
  if (time>12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }
  return time;
}

const addZero = (time) => {
  if(time<10) {
    time="0"+time;
  }
  return time;
}

const showTime = () => {
  let date = new Date();
  let hours = date.getHours();     // 0-23
  let minutes = date.getMinutes(); // 0-59
  let seconds = date.getSeconds(); // 0-59

  let formatHours = convertFormat(hours);

  hours = checkTime(hours);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}

showTime(); // call this because the next function will be executed 1 sec later; avoid black screen
setInterval(showTime, 1000);