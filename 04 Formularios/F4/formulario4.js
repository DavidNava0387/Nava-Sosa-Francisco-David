document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("calForm");
    var cf = document.getElementById("cf");
    var submitButton = document.getElementById("submitButton");

    form.addEventListener("input", function() {
        cf.innerText = "";
    });

    submitButton.addEventListener("click", function() {

        var p1 = parseFloat(document.getElementById("p1").value);
        var p2 = parseFloat(document.getElementById("p2").value);
        var p3 = parseFloat(document.getElementById("p3").value);
        var ef = parseFloat(document.getElementById("ef").value);
        var tf = parseFloat(document.getElementById("tf").value);

        if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(ef) || isNaN(tf)) {
            alert("Debes ingresar calificaciones válidas (números) en todos los campos");
            return;
        }

        if (p1 < 0 || p1 > 10 || p2 < 0 || p2 > 10 || p3 < 0 || p3 > 10 || ef < 0 || ef > 10 || tf < 0 || tf > 10) {
            alert("Debes de ingresar una calificación válida (0 al 10)");
            return;
        }

        var pp = (p1 + p2 + p3) / 3;
        var calFin = (0.55 * pp) + (0.3 * ef) + (0.15* tf);
        //0.55 equivale al 55%
        //0.3 equivale al 30%
        //0.15 equivale al 15%

        cf.innerText = "La calificación final obtenida es " + calFin.toFixed(2);
    });
});

function validarCalificacion(input) {
    var value = parseFloat(input.value.trim());

    if (isNaN(value) || value < 0 || value > 10) {
        alert("Debes de ingresar una calificación válida (0 al 10)");
        input.value = "";
    }
}