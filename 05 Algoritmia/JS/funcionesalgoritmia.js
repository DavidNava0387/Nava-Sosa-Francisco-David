function problema1(){
    var p1_input = document.querySelector("#p1-input").value;

    //Identificar como dividir el texto escrito por espacios
    var p1_palabras = p1_input.split(" ");

    var pInvertida = p1_palabras.map(function(palabra) {
        return palabra.split("").reverse().join("");
    }) 

    var p1_res = "";

    pInvertida.forEach(function(palabra, i) {
        if (i !== 0 || i != pInvertida.length) p1_res += " ";
        p1_res += palabra;
    });

    //Imprimir resultado
    document.querySelector("#p1-output").textContent = p1_res;
}

function problema2(){
    var p2_x1 = document.querySelector("#p2-x1").value;
    var p2_x2 = document.querySelector("#p2-x2").value;
    var p2_x3 = document.querySelector("#p2-x3").value;
    var p2_x4 = document.querySelector("#p2-x4").value;
    var p2_x5 = document.querySelector("#p2-x5").value;

    var p2_y1 = document.querySelector("#p2-y1").value;
    var p2_y2 = document.querySelector("#p2-y2").value;
    var p2_y3 = document.querySelector("#p2-y3").value;
    var p2_y4 = document.querySelector("#p2-y4").value;
    var p2_y5 = document.querySelector("#p2-y5").value;

    //Vamos a formar los vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //Ordenar vectores
    v1 = v1.sort(function(a,b) {
        return b-a;
    })

    v2 = v2.sort(function(a,b) {
        return b - a;
    })

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector("#p2-output").textContent = "El producto escalar mínimo es " + p2_producto;
}

function problema3(){
    // Función para validar si la cadena cumple con el formato requerido
    function validarFormato(cadena) {
        // Expresión regular para verificar si la cadena contiene solo palabras en mayúsculas separadas por comas
        const regex = /^([A-Z]+)(,[A-Z]+)*$/;
        return regex.test(cadena);
    }

    // Función para calcular la cantidad de caracteres únicos en una palabra
    function contarCaracteresUnicos(palabra) {
        // Convertir la palabra en un conjunto de caracteres únicos
        const caracteresUnicosSet = new Set(palabra);

        // Devolver la cantidad de caracteres únicos en la palabra
        return caracteresUnicosSet.size;
    }

    // Obtener las palabras ingresadas por el usuario
    const cadena = document.getElementById('p3-input').value;

    // Validar el formato de las palabras
    if (!validarFormato(cadena)) {
        document.getElementById('p3-output').textContent = "Por favor, ingresa palabras en mayúsculas separadas por comas.";
        return;
    }

    const palabras = cadena.split(",");

    // Inicializar variables para almacenar la palabra con más caracteres únicos y su cantidad
    let palabraMasUnica = "";
    let cantidadMasUnica = 0;

    // Iterar sobre cada palabra para encontrar la que tenga más caracteres únicos
    palabras.forEach(palabra => {
        const cantidadCaracteresUnicos = contarCaracteresUnicos(palabra);
        if (cantidadCaracteresUnicos > cantidadMasUnica) {
            palabraMasUnica = palabra;
            cantidadMasUnica = cantidadCaracteresUnicos;
        }
    });

    // Formatear el resultado
    const resultado = `${palabraMasUnica} = ${cantidadMasUnica} (${[...new Set(palabraMasUnica)].join(" ")})`;

    // Mostrar el resultado en el elemento de salida
    document.getElementById('p3-output').textContent = resultado;
}
