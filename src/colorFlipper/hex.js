const btn = document.getElementById("primary");
const color= document.querySelector(".color");

btn.addEventListener('click', ()=>{
    const randomColor = generateRandomhex();
    document.body.style.backgroundColor = randomColor;
    color.style.color = randomColor;
})

function generateRandomhex(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}