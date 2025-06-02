// ==============================
// 🌱 Sélection des éléments
// ==============================

const nameInput = document.getElementById("Username");
const avatarInput = document.getElementById("avatar");
const btnSend = document.querySelector(".send");
const btnReturn = document.querySelector(".return");
const imgHTML = document.querySelector(".img");
const nameHTML = document.querySelector(".name");

// ==============================
// 🌍 Variables globales
// ==============================

// let monobj = {
//     prenom : "lucas",
//     age : 24
// }

// let montab = ["lucas", "olivier", "harald", "loïc"];

// // se fais ecraser par le prochain
// localStorage.setItem("prenom", "olivier");
// // console.log(localStorage.getItem("prenom"));
// localStorage.setItem("prenom", JSON.stringify(montab));
// localStorage.setItem("obj", JSON.stringify(monobj));
// console.log(JSON.parse(localStorage.getItem("prenom")));
// console.log(JSON.parse(localStorage.getItem("obj")));

const user = {
    name : '',
    avatar : ''
}

// ==============================
// 🎊 Fonctionnalités
// ==============================

function createCard() {
    const obj = JSON.parse(localStorage.getItem("user"));
    imgHTML.innerHTML = '';
    imgHTML.append(createImg(obj));
    nameHTML.innerHTML = createName(obj);
}

function createImg(obj) {
    const img = document.createElement("img");
    img.src = obj.avatar;
    return (img);
}

function createName(obj) {
    return (`Bonjour, ${obj.name}.`);
}

function checkLocal() {
    if (JSON.parse(localStorage.getItem("user"))){
        createCard();
        btnSend.parentElement.classList.add("disabled");
    }
    else {
        imgHTML.parentElement.classList.add("active");
    }
}

// ==============================
// 🧲 Événements
// ==============================

// imgHTML.parentElement.classList.add("active");
checkLocal();

btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameInput.value && avatarInput.value) {
        user.name = nameInput.value;
        user.avatar = avatarInput.value;
        localStorage.setItem("user", JSON.stringify(user));
    }
    btnSend.parentElement.classList.add("disabled");
    imgHTML.parentElement.classList.remove("active");
    createCard();
})

btnReturn.addEventListener("click", (e)=> {
    console.log("clicked");
    imgHTML.parentElement.classList.add("active");
    btnSend.parentElement.classList.remove("disabled");
})