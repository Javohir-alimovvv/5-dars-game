const btn = document.querySelector(".click");
const tel = document.querySelector(".value");

const btn2 = document.querySelector(".click2");
const tel2 = document.querySelector(".valuee");

const result = document.querySelector(".result");

const TEL_NUMBERS = ["tosh", "qaychi", "qog'oz"];

let player1Choice = "";
let player2Choice = "";

// user 1
function randomTel() {
    btn.setAttribute("disabled", true);
    let interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length);
        tel.innerHTML = TEL_NUMBERS[randomNumber];
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        btn.removeAttribute("disabled");
        player1Choice = tel.innerHTML;
        checkWinner();
    }, 700);
}

// user 2
function randomTell() {
    btn2.setAttribute("disabled", true);
    let interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length);
        tel2.innerHTML = TEL_NUMBERS[randomNumber];
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        btn2.removeAttribute("disabled");
        player2Choice = tel2.innerHTML;
        checkWinner();
    }, 700);
}

function checkWinner() {
    if (player1Choice && player2Choice) {
        if (player1Choice === player2Choice) {
            result.innerHTML = "Bu durang!";
        } else if (
            (player1Choice === "tosh" && player2Choice === "qaychi") ||
            (player1Choice === "qaychi" && player2Choice === "qog'oz") ||
            (player1Choice === "qog'oz" && player2Choice === "tosh")
        ) {
            result.innerHTML = "Player 1 yutdi! 👈";
        } else {
            result.innerHTML = "Player 2 yutdi! 👉";
        }

        player1Choice = "";
        player2Choice = "";
    }
}
