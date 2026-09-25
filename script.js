function add() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 + num2;

    document.getElementById("result").textContent = result;
}

function subtract() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 - num2;

    document.getElementById("result").textContent = result;
}