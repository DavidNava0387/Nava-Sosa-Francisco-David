//vamos a crear un arreglo que contenga todas las instrucciones para el juergo

var instrucciones = 
[
    "1.- Utiliza las flechas de navegación para mover las piezas",
    "2.- Para ordenar las piezas guiate por la imagen objetivo"
];

//vamos a crear una variable para gardar cyalk fue el ultimo movimiento dle rompecabeza

var movimientos = 
[

];

//vamos a crear una matriz que represente las posiciones del rompecabezas

var rompe =
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var rompeCorrecta =
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//lo que se mueve del rompezabes es una coordenada vs columna por lo que necesito una  variable para guardar la posicion de la pieza que se mueve

var filaVacia= 2;
var columnaVacia = 2;
//ya que se definio lo que se necesita ahora hay que empezar a estructurar las funciones
//la primera funcion debe de estar en uso es la de instrucciones, debe recorrer el arreglo de las imstrucciones e imprimirlo en el HTML

function mostrarIntrucciones(instrucciones)
{
    for(var i=0; i < instrucciones.length; i++)
    {
        //debo de mostrarlo en la lista
        mostrarIntruccionLista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarIntruccionLista(instruccion, idLista)
{
    var ul = document.getElementById(idLista);
    //debo de agregrar la variable li
    var li = document.createElement("li");
    //para agregarlo usamos text content
    li.textContent = instruccion;
    ul.appendChild(li); 
}

//vamos a crear una funcion para areglar la ultima direccion del movimiento
function agregarUltimoMovimiento(direccion)
{
    movimientos.push(direccion);
}

//necesito una funcion para saber si gane
function checarSiGano()
{
    for(var i=0; i < rompe.length; i++)
    {
        for(var j=0; j < rompe[i].length; j++)
        {
            //donde estoy
            var rompeActual = rompe[i][j];
            //el if es lógica negada
            if(rompeActual !== rompeCorrecta)[i][j]
            {
                return false;
            }
        }
    }
    return true;
}

//si realmente gane debi de mostrarlo en el html
//funcion sin parametros es solo para mostrar XD
function mostarCartelGanador()
{
    if(checarSiGano())
    {
        alert("A mimir :3")
    }
    return false;
}

//necesito una funcion para poder ntercambiar las posiciones de la pieza vacia vs akguna otra
//arreglo[1][2] = arreglo [0][0]
//cuando lo intercambio
//arreglo[0][0] = arreglo [1][2]

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2)
{
    //pos es posicion xd
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];
    //intercambio
    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;
}

//siempre debo de saber donde esta la oieza vacia
function actualizarPosicionVacia(nuevaFila, nuevaColumna)
{
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

//tenemos que checar si la posicion dentro del rompecabezar es la corecta
function posicionValida(fila, columna)
{
    return(fila >= 0 && fila <=2 && columna >= 0 && columna <=2);
}


//ahora viene la parte del movimiento para ello debemos de entender que cada pieza es un hueci realmente dentro de la matriz, y lo unico que se esta intercambiandso son las posiciones de la matriz, significa que cuando yo teclee las flechas de navegacion debi de saber cual se presiono
//arriba 38, abaho 40, uzquierda 37, derecha 39
function moverEnDireccion(direccion)
{
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;
    //si se mueve
    if(direccion == codigosDirreccion.ABAJO)
    {
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }
    else if(direccion == codigosDirreccion.ARRIBA)
    {
        nuevaFilaPiezaVacia = filaVacia - 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }
    else if(direccion == codigosDirreccion.DERECHA)
    {
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    }
    else if(direccion == codigosDirreccion.IZQUIERDA)
    {
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }
    //mandar a llamar a que la posicion sea valida y si no intercambiarlas
    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia))
    {
        //tengo que hacer una funcion que se encargue de intercambiar las posicones
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        //agrega el ultimo movimiento
        agregarUltimoMovimiento(direccion);
    }
}


var codigosDirreccion = 
{
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};

function intercambiarPosiciones(fila1, columna1, fila2, columna2)
{
    var pieza1 = rompe[fila1][columna1];
    var pieza1 = rompe[fila2][columna2];

    intercambiarPosicionesRompe(fila1, columna2, fila2, columna2);
    //debo crear otra funcion para que cambie las posiciones de la imagen
    intercambiarPosicionesDOM('pieza' + pieza1,'pieza' + pieza2);
}

function intercambiarPosicionesDOM(idpieza1, idpieza2)
{
    var elementoPieza1 = document.getElementById(idpieza1);
    //var elementoPieza1 = document.getElementById(idpieza2);

    //vamos a crear clon  y puedo ocultar 
    var padre = elementoPieza1.parentNode;
    var madre = elementoPieza2.parentNode;

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2  = elementoPieza2.cloneNode(true);

    padre.replaceChild(cloneElemento1, cloneElemento2);
    padre.replaceChild(cloneElemento2, cloneElemento1);
}

//La actualizacion de los movimientos
function actualizarUltimoMovimiento(direccion){
    var ultimoMov = document.getElementById("flecha");
    switch (direccion) {
        case codigosDirreccion.ARRIBA:
            ultimoMov.textContent = "⬆";
            break;
        case codigosDirreccion.ABAJO:
            ultimoMov.textContent = "⬇";
            break;
        case codigosDirreccion.IZQUIERDA:
            ultimoMov.textContent = "⬅";
            break;
        case codigosDirreccion.DERECHA:
            ultimoMov.textContent = "➡";
            break;
    }
}

function mezclarPiezas(veces){
    if (veces <= 0) {
        alert("Asi no se puede");
        return;
    }
    var direcciones = [codigosDirreccion.ARRIBA, codigosDirreccion.ABAJO, codigosDirreccion.IZQUIERDA, codigosDirreccion.derecha];
    //REvollvemos
    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)]

    moverEnDireccion(direccion);

    setTimeout(function(){
        mezclarPiezas(veces -1);
    }, 100);

    //Necesitamos saber que teclas esta oprimiendo el jugador
    function capturarTeclas(){
        //Para saber que teclas estan oprimiendo ocupamos onkeydown
        document.body.onkeydown = (function(evento){
            if (evento.which === codigosDirreccion.ARRIBA || evento.which === codigosDirreccion.ABAJO || evento.which === codigosDirreccion.IZQUIERDA || evento.which === codigosDirreccion.DERECHA) {
                moverEnDireccion(evento.which);
                actualizarUltimoMovimiento(evento.which);

                var gano = checarSiGano();
                if (gano) {
                    setTimeout(function(){
                        mostarCartelGanador();
                    }, 500)
                }
            }
        })
    }
}

//Ahora para iniciar el rompecabezas 
function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}

iniciar();

//Mando a llmaar a las instrucciones
mostrarIntrucciones(instrucciones);