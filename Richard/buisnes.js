let balanceuser = document.querySelector(".bal")
let recomindation = document.querySelector(".rec")
function calculate() {
    let income =
    Number(document.getElementById("income").value);
    let expenses =
    Number(document.getElementById("totalExpenses").value);
}





RaschotButton.addEventListener('bal', function calculate() {
    let income =
    Number(document.getElementById("income").value);
    let expenses =
    Number(document.getElementById("totalExpenses").value);
    let balance = income - totalExpenses;
})

RaschotButton.addEventListener('rec', function getAdvice(balance) {
    if(balance >= 500) {
        return "Your finances are in order cousider investment opportunities"
    } else if (balance >= 0) {
        return "You are in the black but you schould think about getting a part-time job"
    } else if (balance < 0 && balance > -500) {
        return "You spend more than you earn, you should cut expenses"
    } else {
        return "Your budget is in critical condition, if you don´t do something, you will soon not be adle, you will soon not be able to support yourself"
    }
})