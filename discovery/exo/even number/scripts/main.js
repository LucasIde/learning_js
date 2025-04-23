const numero = document.getElementById("num");
const checkBt = document.querySelector("#check");
const response = document.querySelector(".response");

checkBt.addEventListener("click", function(e) {
    e.preventDefault();
    let txt;
    if (!numero.value) {
        txt ="form is empty";
    }
    else {
        response.className = "response";
        response.style.color = "";
        if (numero.value % 2 == 0) {
            txt = "even number";
            response.style.color = "green";
        }
        else {
            txt = "odd number";
            response.classList.add("active");
        }
    }
    response.textContent = txt;
    numero.select();
});