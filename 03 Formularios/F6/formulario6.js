document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("cForm");
    var resultado = document.getElementById("ef");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var fecha = new Date(document.getElementById("fecha").value);
        var actual = new Date();
        var edad = actual.getFullYear() - fecha.getFullYear();
        var mess = actual.getMonth() - fecha.getMonth();

        if (mess < 0 || (mess === 0 && actual.getDate() < fecha.getDate())) {
            edad--;
        }
        
        if (isNaN(fecha.getTime())) {
            alert("Debes de ingresar una fecha");
            return;
        }

        resultado.textContent = "Su edad es " + edad + " años";
    });

    document.getElementById("fecha").addEventListener("change", function(){
        resultado.textContent = "";
    });
});