//Primero importamos las librerias

var express = require('express');

//Tenemos que realizar una instancia del objeto para poder hacer uso de express

var app = express();

//Para node tenemos que utilizar rutas de acceso a 
//Por medio de los metodos get, set, post, delete

app.get('/', function(req, res){
    //Debemos generar una respuesta del sitio
    res.send('Ruta de inico');
})

//Levantamos el servidor
app.listen(3000, function(req, res){
    console.log('Servidor inicializado en el puerto 3000');
})