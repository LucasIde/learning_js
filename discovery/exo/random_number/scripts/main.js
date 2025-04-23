const number = document.querySelector(".num");
const btn = document.querySelector("#check");
const response = document.querySelector(".answer");
const txtTry = document.querySelector(".tryLeft");
let randomNumber = Math.floor(Math.random() *100) + 1;
let timeoutID;
let numTry = 10;
let tryTable = [];

txtTry.textContent = numTry;
console.log(randomNumber);

function reset() {
    numTry = 10;
    randomNumber =  Math.floor(Math.random() *100) + 1;
    console.log(randomNumber);
    txtTry.textContent = numTry;
    tryTable =[];
}

btn.addEventListener("click", function(e) {
    let len = tryTable.length;
    let txt;
    e.preventDefault();
    clearTimeout(timeoutID);
    
    if (!number.value || number.value < 1 || number.value > 100) {
        txt = "choose a number between 1 and 100 only";
    }
    else {
        tryTable[len] = number.value;
        console.log(tryTable);
        txtTry.textContent = --numTry;
        if (number.value < randomNumber) {
            txt = "le nombre est plus grand";
        }
        else if (number.value > randomNumber) {
            txt =  "le nombre est plus petit";
        }
        else {
            txt = "Félicitations, vous avez trouvé le bon nombre" ;
            reset();
        }
    }
    if (numTry == 0 && number.value != randomNumber) {
        txt = `you lose the number was ${randomNumber}`;
        reset();
    }
    response.textContent = txt;
    timeoutID = setTimeout(`response.textContent = ""`, 3000);
    number.value = "";
    number.select();
});