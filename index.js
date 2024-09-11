let showtext = document.getElementById("display");

function addToDisplay(btn) {
    showtext.textContent += btn
}

function equal() { 
    showtext.textContent = eval(showtext.textContent);    
}

function clearDisplay() { 
    showtext.textContent = ' ';    
}

function deleteNum() { 
    showtext.textContent = showtext.textContent.slice(0, -1);    
}

