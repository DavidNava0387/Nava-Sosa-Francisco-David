/* Javascript es un lenguaje de programacion multiparadigma
Acepta programacion funcional, estructurado, POO, eventos
Dentro de JS no existe int, double, float, string, etc
Para el manejo de variables con tipo de dato existente el estandar ES6 el cual nos dice que para el manejo de variables tenemos:
VAR LET CONST
*/

// Vamos hacer una funcion para comprobar que el campo nombre sea mayor a 3 caracteres

function validar(Formulario){
    if (Formulario.Nombre.value.length < 3) {
        alert ("Por favor escribe más de 3 caracteres en el nombre");
        Formulario.Nombre.focus();
        return false;
    }

    var abcOK = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM";
    var checkStr = Formulario.Nombre.value;
    alert(checkStr);
    var allValido = true;

    //VAMOS A HACER UN BUCLE MEDIANTE EL CUAL PRIMERO OBTENGA LA CADENA DEL NOMBRE Y LA SEPARE EN CARACTERES, UNA VEZ QUE TENGA CADA CARACTER DEBO DE COMPARRALO CON LA CADENA QUE EN ESTE MOMENTO ESTOY CONSIDERANDO COMO LA VERDAD ABSOLUTA Y SI DESPUES DE RECORRER TODA LA CADENA ENCUENTRA QUE EL CARACTER NO SE ENCUENTRA ENVIE UN ERROR
    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
    }
    if (!allValido){
        alert("Escriba unicamente letras en el campo de nombre");
        Formulario.Nombre.focus();
        return false;
    }

    //EDAD (numeros)
    var abcOK = "1234567890"
    var checkStr = Formulario.Edad.value;
    alert(checkStr);
    
    var allValido = true;
    for(var i = 0; i< checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
        if(!allValido){
            alert("Escriba unicamente numeros en el campo de edad");
            Formulario.Edad.focus();
            return false;
        }
    }

    //CORREO
    var b =/^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
    var txt = Formulario.Correo.value;

    alert("Email" + (b.test(txt)?"":"no")+ " valido")//? operador ternario (if corto)
    return b.test;
}
