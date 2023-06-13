const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
"8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let chosenLength = 15
let firstPassword = document.getElementById("pass1")
let secondPassword = document.getElementById("pass2")
let slider = document.getElementById("pwdRange")
let sliderVal = document.getElementById("passlen")

firstPassword.disabled = true
secondPassword.disabled = true
sliderVal.textContent = chosenLength

slider.addEventListener("input", (event) => {
    sliderVal.textContent = event.target.value
    chosenLength = slider.value
  });
  

function selectRandomIndex(){
    return Math.floor(Math.random() * characters.length)
}

function generatePasswords(){

    firstPassword.value = ''
    secondPassword.value = ''
    
    for(i = 0; i < chosenLength; i++){
        firstPassword.value += characters[selectRandomIndex()]
        secondPassword.value += characters[selectRandomIndex()]
    }
}