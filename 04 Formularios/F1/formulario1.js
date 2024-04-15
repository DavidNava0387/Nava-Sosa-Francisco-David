document.addEventListener("DOMContentLoaded", function(){
    var calcularButton = document.getElementById("calculo");
    var capitalInput = document.getElementById("capital");

    function CalGanancia(){
        var capital = parseFloat(capitalInput.value);

        // Verificar si el campo está vacío o no es un número
        if (capitalInput.value.trim() === "" || isNaN(capital)) {
            alert("Debes ingresar un número válido");
            return; // Detener la ejecución de la función
        }

        var tasaI = 0.02; //"equivale al 2%"
        var interes = capital * tasaI;
        var total = capital + interes;
        document.getElementById("GananciaFinal").innerHTML = "Su capital inicial fue de $" + capital.toFixed(2) + 
        " generando un interés de $" + interes.toFixed(2) + ". Después de un mes, usted tendría un total de $" + total.toFixed(2);
    }

    // Event listener para el clic en el botón "Calcular"
    calcularButton.addEventListener("click", CalGanancia);

    // Event listener para la tecla Enter en el campo de entrada "capital"
    capitalInput.addEventListener("keypress", function(event){
        // Verificar si la tecla presionada es Enter (código de tecla 13)
        if (event.key === "Enter") {
            event.preventDefault(); // Prevenir el envío del formulario por defecto
            CalGanancia(); // Ejecutar la función CalGanancia()
        }
    });
});
