const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
"8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
"+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("pass1")
let secondPassword = document.getElementById("pass2")

firstPassword.disabled = true;
secondPassword.disabled = true;

function selectRandomIndex(){
    return Math.floor(Math.random() * characters.length)
}



function generatePasswords(){

    let generated1 = ""
    let generated2 = ""
    
    for(i = 0; i < 15; i++){
        generated1 += characters[selectRandomIndex()]
        generated2 += characters[selectRandomIndex()]
    }

    firstPassword.value = generated1
    secondPassword.value = generated2
}