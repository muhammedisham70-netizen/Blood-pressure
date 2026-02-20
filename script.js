function checkBP() {

    let sys = document.getElementById("sys").value;
    let dia = document.getElementById("dia").value;
    let result = document.getElementById("result");

    if (sys === "" || dia === "") {
        result.innerHTML = "Please enter both values!";
        result.style.color = "red";
        return;
    }

    sys = Number(sys);
    dia = Number(dia);

    if (sys < 90 && dia < 60) {
        result.innerHTML = "Low Blood Pressure";
        result.style.color = "blue";
    }
    else if (sys >= 90 && sys <= 120 && dia >= 60 && dia <= 80) {
        result.innerHTML = "Normal Blood Pressure";
        result.style.color = "green";
    }
    else if (sys >= 120 && sys <= 129 && dia < 80) {
        result.innerHTML = "Elevated Blood Pressure";
        result.style.color = "orange";
    }
    else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) {
        result.innerHTML = "High BP (Stage 1)";
        result.style.color = "darkorange";
    }
    else if (sys >= 140 || dia >= 90) {
        result.innerHTML = "High BP (Stage 2)";
        result.style.color = "red";
    }
    else {
        result.innerHTML = "Invalid Values";
        result.style.color = "black";
    }
}
