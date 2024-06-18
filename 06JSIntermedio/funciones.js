/*
JS maneja variables del siguiente modo: 

var -> variable de acceso local que cualquiera puede hacer uso de ella
let -> variable "protegida" solo se puede hacer uso dentro de la función una variable local más no global
cons -> es una constante, significa que su valor no puede cambiar 

var x = "Hola";
let x = "Había una vez";
if (true) {
    
    
    //Todo lo que cocurra aquí es independiente
}

console.log(x);


function suma(n1, n2){
    return n1 + n2;
}
//La comilla inversa es un modificador de HTML (desde JS)
//Sirve para pasar parametros de funciones
console.log(`Esta es la suma: ${suma(4,5)}`)

Funciones flecha, las funciones flecha nos ayudan apoder realizar operaciones de una forma más sencilla y su estructura es la siguiente: 
"cadena" -> id, clase, nombre, atributo

const sumarFlecha = (n1, n2) => n1 + n2;
console.log(`Esta es la suma: ${sumarFlecha(10,5)}`);
*/

const razaDePerros = [
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Bethoven",
    "Belga",
    "Dalmata",
    "Pitbull",
    "San Bernardo"
];

//Queremos recorrerlo e imprimirlo
//Forma más sencilla For
/*
for (let i = 0; i < razaDePerros.length; i++) {
    console.log(razaDePerros[i]);
    
}
*/

/*
for(const raza of razaDePerros){
    console.log(raza);
}
*/

/*
for(const indice in razaDePerros){
    console.log(razaDePerros[indice]);
}

for(const indice in razaDePerros){
    console.log(razaDePerros);
}
*/

//forEach itera sobre los elementos del arreglo y no devuelve nada
//Todos los forEach son funciones flecha por defecto
/*
razaDePerros.forEach((raza) => console.log(raza));
*/
//La estructura general del forEach
//argumento.forEach((raza, indice, arregloOriginal) => lo que quiero que haga)

//Funcion MAP
//Itera sobre los elementos del arreglo y regresa un arreglo diferente con el cual podemos jugar
/*
const razaDePerrosEnMayusculas = razaDePerros.map((raza) => console.log(raza.toUpperCase()));
*/

//FIND
//Nos permite realizar una busqueda de un elemento dentro del arreglo, si lo encuentra, lo retorna sino lanza un "underfinend"
//POr ejemplo yo quiero buscar dentro del arreglo si existe la raza Chihuahua
/*
if (razaDePerros.find((raza) => raza === "Chihuahua")) {
    console.log("La raza se encuentra dentro del arreglo");
    console.log(razaDePerros);
}
else{
    //Hay que meterlo
    razaDePerros.push("Chihuahua");
    console.log(razaDePerros);
}
*/

//FINDINDEX
//Es muy similar al anterior, realiza una busqueda del elemento; pero en lugar de regresar el elemento, regresa su índice, sino lo encuentra nos devuelve un -1
//Esta funcion es particularmente util en elementos que necesitamos modificar de un arreglo original, dentro de una copia 
const indiceChihuahua = razaDePerros.findIndex((raza) => raza === "Chihuahua");

if (indiceChihuahua > -1) {
    console.log(razaDePerros[indiceChihuahua]);
    //Aparte le voy a decir que agregue un texto
    razaDePerros[indiceChihuahua] += " (Es una raza de perros chiquita y escandalosa, como algunos alumnos de escandalosos)";
    console.log(razaDePerros[indiceChihuahua]);
    console.log(razaDePerros);
}