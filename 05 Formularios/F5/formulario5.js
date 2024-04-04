document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hombres").addEventListener("input", function() {
        limpiarR();
        verificarN(this);
    });

    document.getElementById("mujeres").addEventListener("input", function() {
        limpiarR();
        verificarN(this);
    });

    document.getElementById("porcs").addEventListener("click", function() {
        if (document.getElementById("hombres").value === "" || document.getElementById("mujeres").value === "") {
            alert("Debes de ingresar datos válidos (números)")
        }
        else{
            calcularPorcentaje();
        }
    });
});

function limpiarR() {
    document.getElementById("pf").innerHTML = "";
}

function verificarN(input) {
    var val = parseInt(input.value);
    if (val < 0 && input.value !== "") {
        alert("Debes de ingresar datos válidos (positivos)");
        input.value = "";
    }
}

function calcularPorcentaje() {
    var hombres = parseInt(document.getElementById("hombres").value);
    var mujeres = parseInt(document.getElementById("mujeres").value);var t = hombres + mujeres;

    if (hombres < 0 || mujeres < 0) {
        alert("Debes de ingresar datos válidos (positivos)");
        return;
    }

    var ph = (hombres / t) * 100;
    var pm = (mujeres / t) * 100;

    document.getElementById("pf").innerHTML = "El porcentaje de hombres que hay es " + ph.toFixed(2) + "%<br>" + "El porcentaje de mujeres que hay es " + pm.toFixed(2) + "%";
}