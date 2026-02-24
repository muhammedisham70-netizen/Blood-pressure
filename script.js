function checkBP() {

    let sys = document.getElementById("sys").value.trim();
    let dia = document.getElementById("dia").value.trim();
    let result = document.getElementById("result");

    if (sys === "" || dia === "") {
        showResult("Please enter both values!", "red");
        return;
    }

    sys = Number(sys);
    dia = Number(dia);

    // Validation
    if (sys <= 0 || dia <= 0 || sys > 300 || dia > 200) {
        showResult("Enter valid BP values!", "black");
        return;
    }

    // Classification (Correct medical order)
    if (sys >= 140 || dia >= 90) {
        showResult("High BP (Stage 2)", "red");
    }
    else if (sys >= 130 || dia >= 80) {
        showResult("High BP (Stage 1)", "darkorange");
    }
    else if (sys >= 120 && dia < 80) {
        showResult("Elevated Blood Pressure", "orange");
    }
    else if (sys >= 90 && dia >= 60) {
        showResult("Normal Blood Pressure", "green");
    }
    else {
        showResult("Low Blood Pressure", "blue");
    }
}

function showResult(text, color){
    let result = document.getElementById("result");
    result.innerHTML = text;
    result.style.color = color;
}
