let balanceuser = document.querySelector(".bal")
let recomindation = document.querySelector(".rec")
let RaschotButton = document.querySelector(".raschot")
let SovetButton = document.querySelector(".sovet")
let h2 = document.querySelector("h2")
let income = document.querySelector(".income")
let totalExpenses = document.querySelector(".totalExpenses")

RaschotButton.addEventListener('click', function calculate() {
    let income =
    Number(document.getElementById("income").value);
    let expenses =
    Number(document.getElementById("totalExpenses").value);
    let balance = income - totalExpenses;
})

SovetButton.addEventListener('click', function getAdvice(balance) {
    if(balance >= 500) {
        h2.innerHTML = `<h2>Your finances are in order cousider investment opportunities</h2>`
    } else if (balance >= 0) {
        h2.innerHTML = `<h2>You are in the black but you schould think about getting a part-time job</h2>`
    } else if (balance < 0 && balance > -500) {
        h2.innerHTML = `<h2>You spend more than you earn, you should cut expenses</h2>`
    } else {
        h2.innerHTML = `<h2>Your budget is in critical condition, if you don´t do something, you will soon not be adle, you will soon not be able to support yourself</h2>`
    }
})
22