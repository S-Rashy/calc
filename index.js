let ac = document.getElementById("ac");
let del = document.getElementById("del");
let slash = document.getElementById("slash");
let times = document.getElementById("times");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight").value;
let nine = document.getElementById("nine");
let minus = document.getElementById("minus");
let four = document.getElementById("four");
let equal = document.getElementById("equal");
let plus = document.getElementById("plus");
// seven = parseInt(seven)
// eight = parseInt(eight)

let showtext = document.getElementById("display");

// console.log( seven);

ac.onclick=function () {
    showtext.textContent = ``
}

// seven.onclick=function () {
//     return displaytext = showtext.textContent += ${seven};
  

// }

// let whatever = function (val) {
//     return showtext(val);
//     // console.log(whatever)

// }






    //showtext.textContent += 8
    // return 
    // console.log(whatever);
    
// }
console.log(showtext.value);

seven.onclick=function () {
    showtext.textContent += `7`
}


plus.onclick=function () {
    showtext.textContent += `+`
}


function calculate() {
   
    showtext.value = eval(showtext.value);
    //showtext.textContent = result

    // console.log(result);

    // console.log(calculate);

    
}



// let result = equal.onclick=function () {
//     return eval(showtext.value);
    
//     //showtext.textContent = `${result}`
// }
// equal.addEventListener("click", function calculate (){
    
//     let result = eval(showtext)
//     showtext.textContent = `${result}`
// }) 

// console.log(result);
