
function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let sess = document.getElementById('sessions');
  
    if (hrs <= 12) {
      sess.innerHTML = 'am'
    }
    else {
      sess.innerHTML = 'pm'
    }
  
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = sec;
  
  
  
  }
  setInterval(displayTime, 10);

