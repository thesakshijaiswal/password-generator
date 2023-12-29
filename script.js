const lowerset="abcdefghijklmnopqrstuvwxyz"
const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberset="0123456789"
const symbolset="#@&-€¥$¢~^"

//selector
const passBox = document.getElementById("pw-box-disp");
const totalChar = document.getElementById("length");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");


const getRandomData = (dataset) =>{
return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePassword=(password = "")=>{
  
    if(upperCase.checked) {
      password+=getRandomData(upperset)
    }
    
     if(lowerCase.checked) {
      password+=getRandomData(lowerset)
    }
    
     if(number.checked) {
      password+=getRandomData(numberset)
    }
    
     if(symbol.checked) {
      password+=getRandomData(symbolset)
    }
    
    if(password.length < totalChar.value){
       return generatePassword(password)
    }
    if(totalChar.value<3){
        alert("Your password must contain more than 3 character");
      return;  
    }
    passBox.innerText = truncateString(password,totalChar.value);
}

let button =document.getElementById("btn")
button.addEventListener("click",function(){
    generatePassword();
})

function truncateString(str,num) {
    if(str.length > num) {
    let subStr = str.substring(0,num)
    return subStr;      
    }else {
    return str;    
    }
}

function copyPassword() {
    const tempElement = document.createElement("textarea");
    const generatedPassword = passBox.innerText;
   if(!generatedPassword) {
       alert("No password generated");
       return;
   }
   tempElement.value = generatedPassword;
   document.body.appendChild(tempElement);
   tempElement.select();
   document.execCommand("copy");
   tempElement.remove();
   alert("password copied!")
}
