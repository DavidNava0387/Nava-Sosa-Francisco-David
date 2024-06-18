document.addEventListener("DOMContentLoaded", function() {
function csFinal() {
    // Obtener los valores de sueldo base y ventas de cada mes
    var sBase = parseFloat(document.getElementById("sBase").value);
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);

    // Verificar si se ingresaron valores válidos
    if (isNaN(sBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
        alert("Debes ingresar datos válidos (números)");
        return;
    }

    // Calcular la comisión de cada mes (10% de las ventas)
    var comision1 = venta1 * 0.1;
    var comision2 = venta2 * 0.1;
    var comision3 = venta3 * 0.1;

    // Calcular el total de comisiones
    var totalComisiones = comision1 + comision2 + comision3;

    // Calcular el sueldo final sumando el sueldo base y el total de comisiones
    var sueldoFinal = sBase + totalComisiones;

    // Mostrar el sueldo final en el elemento "sf"
    document.getElementById("sf").innerText = "El sueldo del vendedor con comisiones es de $" + sueldoFinal.toFixed(2);
}

// Agregar un evento de escucha al formulario para llamar a la función csFinal() al enviar el formulario
document.getElementById("scc").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    csFinal(); // Calcular el sueldo final
});
});
