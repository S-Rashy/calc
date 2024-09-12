let showtext = document.getElementById("display");


function addToDisplay(btn) {
    if (showtext.textContent.length >= 20) {
        alert("Equation too long")
    }
    
    showtext.textContent += btn

}

function equal() { 
//     let lastnum = showtext.textContent.slice( 0,-1)
//     // let firstnum = showtext.teazxtContent.charAt[0]

//   if ( lastnum === '+'|| lastnum == '-' || lastnum == '*' || lastnum == '/' ) {
//     showtext.textContent = "Equation Invalid"
// } 
    // else if ( firstnum ==  '*' || firstnum == '/'  ) {
    //     showtext.textContent = "Equation Invalid"
    // }
    
    showtext.textContent = eval(showtext.textContent);       
    
}

function clearDisplay() { 
    showtext.textContent = ' ';    
}

function deleteNum() { 
    showtext.textContent = showtext.textContent.slice(0, -1);    
}
function toPercent() {
    showtext.textContent = showtext.textContent/100

}
function square() {
    showtext.textContent = showtext.textContent**2
}

function squareroot() {
    showtext.textContent = Math.sqrt(showtext.textContent);
}



