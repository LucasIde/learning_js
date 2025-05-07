// ==============================
// 🌱 Sélection des éléments
// ==============================

const num = document.querySelector(".num");
const btn = document.querySelector(".check");
const response = document.querySelector(".answer");

// ==============================
//  🌍 Variables globales
// ==============================



// ==============================
// 🎊 Fonctionnalités
// ==============================

function convert_temp(deg) {
    return ((deg * (9/5)) + 32);
}

// ==============================
// 🧲 Événements
// ==============================

btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (num.value) {
        response.innerHTML = `temperatur = ${num.value} c°/ ${convert_temp(num.value)} f°`;
        num.value = '';
        num.select();
    }
});