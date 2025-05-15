// ==============================
// 🌱 Sélection des éléments
// ==============================

const espece = document.querySelector(".espece");
const age = document.querySelector(".age");
const nom = document.querySelector(".name");
const btn = document.querySelector("button");
const liste = document.querySelector(".liste");

// ==============================
// 🌍 Variables globales
// ==============================

const obj = {
    prénom : "lucas",
    age : 24,
    ville : "bx"
}

const livre = {
    titre : "'livre'",
    auteur : "écrivain",
    show() {
        return(`"Le livre ${this.titre} a été écrit par ${this.auteur}."`);
    }
}

const produit = {
    nom : "T-shirt",
    prix : 20,
    quantite : 3,
    tot() {
        return(this.prix * this.quantite)
    }
}

const joueur = {
    nom: "Alex",
    points: 10,
    niveau: 1,
    addpoint(num) {
        this.points += num;
        if (this.points > 10){
            this.levelup();
        }
    },
    levelup() {
        this.niveau++;
    },
    print() {
        console.log(`player: '${this.nom} -> ${this.points} points / ${this.niveau} lvl'`);
    }
  }


class Animal {
    constructor(espece, age, nom) {
        this.espece = espece;
        this.age = age;
        this.nom = nom;
    }
    print() {
        console.log(`"${this.nom} est un(e) ${this.espece} de ${this.age} ans."`);
    }
    décrire() {
        const li = document.createElement("li");
        li.innerHTML = `"${this.nom} est un(e) ${this.espece} de ${this.age} ans."`
        liste.append(li);
    }
}

// const tabAnimals = [new Animal("chat", 2, "Zola"), new Animal("chien", 10, "Tartine"), new Animal("poisson", 1, "Cola")];
const tabAnimals = [];

// ==============================
// 🎊 Fonctionnalités
// ==============================

console.log(`"Bonjour, je m'appelle ${obj.prénom}, j'ai ${obj.age} ans et j'habite à ${obj.ville}"`)
console.log(livre.show());
console.log(produit.tot());
joueur.addpoint(5);
joueur.print();

// for (let animal of tabAnimals) {
//     animal.print();
// }

function resetvalue() {
    espece.value = "";
    age.value = "";
    nom.value = "";
    espece.select();
}

// ==============================
// 🧲 Événements
// ==============================

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (espece.value && age.value && nom.value) {
        tabAnimals.push(new Animal(espece.value, age.value, nom.value));
        tabAnimals[tabAnimals.length-1].décrire();
        console.log(tabAnimals);
    }
    resetvalue();
})