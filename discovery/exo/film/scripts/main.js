// ==============================
// 🌱 Sélection des éléments
// ==============================

const list = document.querySelector(".film");
const btn = document.querySelector(".button");

    // ==============================
// 🧠 Variables globales
// ==============================

const films = [
    `Le Dîner de cons - comédie`,
    `Inception - science-fiction`,
    `Astérix et Obélix : Mission Cléopâtre - comédie`,
    `Gladiator - drame`,
    `La Grande Vadrouille - comédie`,
    `Interstellar - science-fiction`,
    `Intouchables - comédie`,
    `Les Visiteurs - comédie`,
    `Matrix - science-fiction`,
    `Le Fabuleux Destin d'Amélie Poulain - comédie`,
    `Shutter Island - thriller`,
    `Bienvenue chez les Ch'tis - comédie`,
    `The Dark Knight - action`,
    `OSS 117 : Le Caire, nid d'espions - comédie`,
    `Parasite - thriller`,
    `Camping - comédie`,
    `Forrest Gump - drame`,
    `Deadpool - action`,
    `Les Bronzés font du ski - comédie`
];

// ==============================
// 🎊 Fonctionnalités
// ==============================

function split_genre() {
    films.forEach((film) => {
        const splited = film.split(" - ")
        const tmp = document.createElement("li");
        tmp.textContent = `${splited[0]}`;
        tmp.setAttribute("genre",`${splited[1]} all`);
        list.appendChild(tmp);
    });
}



function movie_filter () {

}

// ==============================
// 🧲 Événements
// ==============================

split_genre();

btn.addEventListener("click", function(e) {
    if (e.target.className) {
        console.log("hello");
        console.log(e.target.className)
    }
});