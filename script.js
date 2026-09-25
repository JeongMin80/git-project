function multiply() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 * num2;

    document.getElementById("result").textContent = result;
}

function divide() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    if (num2 === 0) {
        document.getElementById("result").textContent = "0으로 나눌 수 없습니다.";
        return;
    }

    const result = num1 / num2;

    document.getElementById("result").textContent = result;
}