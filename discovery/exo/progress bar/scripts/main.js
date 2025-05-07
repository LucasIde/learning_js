const body = document.body;
const position = document.querySelector(".progress");
const nav = document.querySelector("nav");

const navPos = nav.offsetTop + nav.getBoundingClientRect().height;
let scrollPos = 0;

function readBar() {
    const hMax = body.offsetHeight - window.innerHeight;
    let pos = (window.scrollY / hMax) * 100
    position.style.width = `${pos}%`;
}

window.addEventListener("scroll", function(){
    readBar();
    if (window.scrollY >= navPos) {
        nav.classList.add("sticky");
        window.scrollY < scrollPos ? nav.style.translate = "0% -100%" : nav.style.translate = "0%"
        scrollPos = window.scrollY;
    }
    else{
        nav.classList.remove("sticky");
        nav.style.translate = "0%"
    }
    // console.log(nav.getBoundingClientRect());
});