const myButton = document.querySelector("button");
const compteur = document.querySelector(".compteur");
const wrapper = document.querySelector(".wrapper");
const myBody = document.body;
let x = 0;
compteur.innerHTML = x;
// textContent plus performant mais ne peut injecter que du text (pas de balise contrairement à innerHTML) 

myButton.addEventListener("click", function () {
    myBody.classList.toggle("active")
    compteur.textContent = ++x;
    myButton.classList.toggle("active")
    let xPos = Math.floor(Math.random() *(70 - 20)) + 20;
    let yPos = Math.floor(Math.random() *(70 - 20)) + 20;
    let rotate =  Math.floor(Math.random() *360);
    wrapper.style.top = xPos +"%";
    wrapper.style.left = yPos +"%";
    wrapper.style.rotate = rotate + "deg";
})

