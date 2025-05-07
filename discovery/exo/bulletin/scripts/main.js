// ==============================
// 🌱 Sélection des éléments
// ==============================

const list = document.querySelector(".note");

// ==============================
// 🧠 Variables globales
// ==============================

const tab = [5, 12, 8, 17, 3, 15];

// ==============================
// 🎊 Fonctionnalités
// ==============================

function check_note() {
    tab.forEach(function(num) {
        if(num >= 10) {
            const li = document.createElement('li');
            li.textContent = `note :${num}/20`;
            list.appendChild(li);
        }
    })
}

// ==============================
// 🧲 Événements
// ==============================

check_note();