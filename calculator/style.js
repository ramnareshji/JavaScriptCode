function sendvalue(a){
    document.getElementById('screen').value += a; 
}

function equalvalue() {
   var b = eval(document.getElementById('screen').value )
    document.getElementById('screen').value = b;

}
function clearvalue(c) {
 document.getElementById('screen').value = c ;
}



// calculator which shows direct values 

// function sendvalue(a){
//     document.getElementById('cc').value += a; 
// }

// function equalvalue() {

//     var b = eval(document.getElementById('cc').value )
//     document.getElementById('ccs').value = b;


// }
// function clearvalue(c) {
//  document.getElementById('ccs').value = c ;
// }