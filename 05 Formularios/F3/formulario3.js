document.addEventListener("DOMContentLoaded", function() {
    function calcularDescuento() {
        
        var total = parseFloat(document.getElementById("total").value);

        if (isNaN(total) || total <=0) {
            alert("Debes ingresar un total válido (positivo)");
            return;
        }
        var descuento = total * 0.15; //0.15 representa el 15%
        var pFinal = total - descuento;
        var reFin = document.getElementById("tFinal")
        reFin.innerHTML = "";
        var dCompra = document.createElement("p");
        dCompra.textContent = "El total de la compra es: $" + total.toFixed(2);
        reFin.appendChild(dCompra);
        var desCompra = document.createElement("p");
        desCompra.textContent = "Su descuento el 15% equivale a: $" + descuento.toFixed(2);
        reFin.appendChild(desCompra);
        var pf = document.createElement("h2");
        pf.textContent = "La cantidad final a pagar es de: $" + pFinal.toFixed(2);
        reFin.appendChild(pf);
    }
    document.getElementById("calculadora").addEventListener("submit", function(event) {
        event.preventDefault();
        calcularDescuento();
    });

    document.getElementById("total").addEventListener("input", function() {
        document.getElementById("tFinal").innerHTML = "";
    });

    document.querySelector("#calculadora button[type='submit']").addEventListener("click", function(event) {
        var total = document.getElementById("total").value.trim();
        if (total === "") {
            alert("Debes ingresar un dato váñido (Números)");
            event.preventDefault();
        }
    });
});