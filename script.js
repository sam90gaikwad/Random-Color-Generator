
let AllDivs = document.querySelectorAll(".color");

AllDivs.forEach((div) =>{
    let newColor = randomColor();
    div.style.backgroundColor = newColor;
    div.innerText = newColor;
})

function randomColor(){
    let str = "1234567890abcdef";
    let colorStr = "#"
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random() * str.length);
        colorStr += str[randomIndex];
    }
    return colorStr
}


