let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
console.log(h, m, s, d)

// Search on Google for more 

// u can write this way
let timeprint =  document.getElementById("timeLine").innerHTML ="The time is "+ h + ":"+ m + ":"+s ;

let dateprint = document.getElementById("DateLine").innerHTML = " Today's date is :- "+d;

 // essa nhi hoga 
// timeLine.innerHTML("The time is "+ h + ":"+ m + ":"+ s)  