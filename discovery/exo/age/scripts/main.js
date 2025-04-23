const age = document.querySelector("#age");
const checkBt = document.querySelector("#check");
const response = document.querySelector(".response");

checkBt.addEventListener("click", function(e) {
    e.preventDefault();
    let txt;
    if (!age.value) {
        txt ="age form is empty";
    }
    else {
        if (age.value < 0 || age.value > 120) {
            txt ="invalide number (range is between 0/120)";
        }
        else {
            (age.value < 18) ? txt ="vous êtes mineur" : txt ="vous êtes majeur";
        }
        age.value = '';
    }
    response.textContent = txt;
    age.select();
});