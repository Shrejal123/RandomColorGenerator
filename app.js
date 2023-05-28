const getColor =() =>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    // to convert it into hexcode
    const randomCode= "#" + randomNumber.toString(16); 
    // console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
  
  //to save the the color code and paste it we only use ctrl+v thats it.
    navigator.clipboard.writeText(randomCode)
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
 
getColor();