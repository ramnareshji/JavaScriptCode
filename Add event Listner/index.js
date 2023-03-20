let x = function(event) {
    document.write(event.target)
    document.write(event.type, event.clientX, event.clientY)
    // alert("Hello World1!")
  }
  
  let y = function(e) {
    document.write(e)
    alert("Hello World2!")
  }
  
  btn.addEventListener('click', x)
  
  
  // btn.addEventListener('click', y)
  
  // let a = prompt("What is your favorite number?");
  
  
  // if (a == "2") {
  //   btn.removeEventListener('click', x)
  // }
  