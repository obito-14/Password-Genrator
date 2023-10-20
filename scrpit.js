let inputId =document.getElementById("input");
let Btn =document.getElementById("btn");


function genPassword() {
    var chars = "abcdefghijklmnopqrstuvwxyz@#*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var passwordLength= 8;
    var password = "";
    for (var i = 0; i < passwordLength; ++i) {
        var randomNumber = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
        
    }
    inputId.value = password;
    navigator.clipboard.writeText(password)
}
     Btn.addEventListener("click",()=>{

      genPassword()})


