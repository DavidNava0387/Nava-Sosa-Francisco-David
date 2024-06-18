//Vamos a crear nuestro propio servidor

var http = require('http');

//Todo servidor debe de poder atender poeticiones y debe de generar respuestas, por lo tanto nuestra funcion debe tener dos parametros request, response

var servidor = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset-utf-8'});
    response.write('<h2>Hola mundo esto es mi primer servidor que hace lo mismo que todos los demas, pero en chiquito. Habia una vez un patito que decia miau miau</h2>');
    console.log('Se hizo una petición web');
    response.end();
})

//En que puerto va a estar funcionando el servidor
servidor.listen(3000);

//Ejecutamos en consola
console.log('Ejecutando el servidor en puerto 3000');