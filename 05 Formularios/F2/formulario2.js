document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("scc");
    var button = document.querySelector("#scc button");
    var sBaseInput = document.getElementById("sBase");
    var ventaInput = document.getElementById("venta");

    button.addEventListener("click", function(event) {
        event.preventDefault();
        calcularSueldo();
    });

    sBaseInput.addEventListener("input", limpiarResultado);
    ventaInput.addEventListener("input", limpiarResultado);

    function calcularSueldo(){
        var sBase = parseFloat(sBaseInput.value);
        var venta = parseFloat(ventaInput.value);

        if (isNaN(sBase) || isNaN(venta)) {
            alert("Debes de ingresar datos válidos (números)" );
            return;
        }
        var comision = venta * 0.1; // 0.1 es equivalente a 10%
        var sFinal = sBase+ comision;

        document.getElementById("sf").innerText = "El sueldo del vendedor contando comisiones es de $" + sFinal.toFixed(2);
    }

    function limpiarResultado() {
        document.getElementById("sf").innerText="";
    }
});
