const myBtn = document.querySelector(".btn");
function changeColors(){
document.body.style.backgroundColor ="blue";
}
myBtn.addEventListener("click",changeColors);

function changeBgtoRandom() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = `#${randomColor}`;
}
function changeTxtColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.textColor = `#${randomColor}`;
}