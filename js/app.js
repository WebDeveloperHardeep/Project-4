const getColor = () =>{
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215)
    console.log(randomNumber)
    const randomCode = "#" +randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode
    document.getElementById("color-code").innerText = randomCode

    navigator.clipboard.writeText(randomNumber)
}

// Event call work on click 
document.getElementById("btn").addEventListener("click",getColor)

// init call  work on page reload
getColor()