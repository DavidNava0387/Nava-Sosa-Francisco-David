var mysql = require('mysql2');

//Primero vamos a conectarnos

var conexion = mysql.createConnection({
    host : 'localhost', //Aqui va la ip
    database : 'alumnos4IV7',
    user : 'root',
    password : 'MySQL07nsfd.'
});

//Ejecutamos la conexion
conexion.connect(function(error){
    //Si no conecta
    if (error) {
        throw error;
        console.log('Solo juguito contigo');
    }else{
        console.log('Si conected');
    }
});

//Vamos a consultar 

conexion.query('select * from registro', function(error, respuesta){
    if (error) {
        throw error;
        console.log('No tablita');
    }else{
        //Como no se cuantos datos tengo debo de recorrerlos
        respuesta.forEach(respuesta => {
            console.log(respuesta);
        });
    }
});

//Vamos a agregar
/*conexion.query('insert into registro (nombre, appat, apmat, correo, password) values ("Diana", "Ortiz", "Dominguez", "cosa@cosa.com", "12345")', function(error, respuesta){
    if (error) {
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Registro exitoso, ', respuesta);
    }
});
conexion.query('insert into registro (nombre, appat, apmat, correo, password) values ("Francisco David", "Nava", "Sosa", "navad1411@gmaail.com", "NoMeAcuerdo")', function(error, respuesta){
    if (error) {
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Registro exitoso, ', respuesta);
    }
});*/

//Vamos a Modificar
/*conexion.query('update registro set correo = "fnavas2200@alumno.ipn.mx" where boleta = 4', function(error, respuesta){
    if (error) {
        throw error;
        console.log('Boleta inexistente');
    }else{
        console.log('Datos actualizados', respuesta);
    }
});*/

//Vamos a Eliminar
/*conexion.query('delete from registro where boleta = 4', function(error, respuesta){
    if (error) {
        throw error;
        console.log('Boleta inexistente');
    }else{
        console.log('Alumno eliminado', respuesta);
    }
});*/