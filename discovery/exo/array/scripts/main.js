// const students = ["Harald", "Loïc", "Lucas", "Damian", "Mohamed", "Arianne", "Alphonse", "Hugues", "Vincent", "Mohamed C", "Yassine", "Alexandre"];
// const list = document.body;
// students.push("Olivier");
// students.shift();
// students.splice(students.indexOf("Alexandre"), 1);

// students.forEach(function(student) {
//     list.innerHTML += `<li>${student}</li>`;
// });

const article = document.querySelector(".article");
const btn = document.querySelector(".add");
const list = document.querySelector(".list");
const num = document.querySelector(".num");
const basket = [];


btn.addEventListener("click", function(e) {
    e.preventDefault();
    article.value = article.value.trim().toLowerCase();
    num.innerHTML = basket.length + 1;
    if (article.value && !basket.includes(article.value)) {
        basket.push(article.value);
        console.log(basket);
        list.innerHTML += `<li>${article.value} <button class="delete" data-index='${article.value}'>delete</button></li>`
    }
    article.value = '';
    article.select();
});

list.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        let index = e.target.dataset.index;
        let i = basket.indexOf(index);
        basket.splice(i, 1);
        e.target.parentElement.outerHTML = '';
        console.log(basket);
    }
});
