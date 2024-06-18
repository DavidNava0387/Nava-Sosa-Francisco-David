//Esta es tu primera API REST, la cual nos permite obtener información sobre diferentes tipos de pokemon, conforme a lo que exista por parte del sitio https://pokeapi.com para ello lo primero que tenemos
const pokeApiUrl = "https://pokeapi.co/apiv2/";

//Necesitamos un objeto que se encargue de obtener cada uno de los campos del DOM referentes con el uso de la API, a partir de que el usuario ingresa el nombre del pokemon,

const pokedex = () => {
    //Cada stat vamos a defininr un arreglo para obteneer cada estadística
    const pokemonStatElements = {
        hp : document.getElementById("pokemonStatHP"),
        attack : document.getElementById("pokemonStatAttack"),
        defense : document.getElementById("pokemonStatDefense"),
        specialAttack : document.getElementById("pokemonStatSpecialAttack"),
        specialDefense : document.getElementById("pokemonStatSpecialDefense"),
        speed : document.getElementById("pokemonStatSpeed")
    };

    //Necesitamos identificar la clase de cada pokemon y se aplique la css a dicha clase

    let currentClassType = null;

    //Necesitamos poder cambial las imagenes del template ya sea por la pokebola, no encontrado o la imagen pokemon

    const imageTemplate = "<img class='pokedisplay' src='(imgSrc)' alt='pokedisplay' >";

    //Necesitamos un objeto que se encargue de guardar donde estan las rutas de las imagenes que se van a ocupar para la pokedex

    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    }

    //Necesitamos un objeto que se encargue de obtener cada una de las referencias de los elemntos de informacion del pokemon

    const containers = {
        imagenContainer : document.getElementById("pokedisplay-container"),
        pokemonTypesContainer : document.getElementById("pokemonTypes"),
        pokemonNameElement : document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement : document.getElementById("pokemonAbilities"),
        pokemonMovesElement : document.getElementById("pokemonMoves"),
        pokemonIdElement : document.getElementById("pokemonId")
    };

    //Necesitamos un objeto que se encargue de obtener las referencias  de cada uno de los botones de la pokedex

    const buttons = {
        all : Array.from(document.getElementsByClassName("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previos : document.getElementById("btnDown")
    };

    //Necesitamos obteenr la referencia una vez que el usuario haya escrito el nombre del pokemon

    const pokemonInput = document.getElementById("pokemonName");

    //Cada una de las variables obtiene los elemntos correspomdientes en el html y esto nos sirve para podeer crear funciones especificas que se encarguen unicamente de 1 sola cosa

    //Necesitamos una funcion que obtenga los datos del pokemon una vez que se halla lanzado la peticion con el nombre del pokemon
    const processPokemonTypes = (pokemonData) => {
        //Una variable para obtener el tipo
        let pokemonType = "";
        //Utilizamos la primera clase para dar el color a cada uno de los contenedores movimientos y habilidades del pokemon
        const firstClass = pokemon.Data.types[0].type.name;
        //Types es un arreglo que se obtiene por parte de la pokeapi, y nos responde por medio de un pokemonData el cual tenemos que recorrer
        pokemonData.types.forEach((pokemonTypeData) =>{
            //Lo primero que vamos a necesitar es etiquetar la clase del tipo de pokemon
            pokemonType += '<span class="pokemon-type ${pokemonTypeData.type.name}"> ${pokemonTypeData.type.name}</span>';
        });

        //Necesitamos quitar la clase previa del contenedor cada vez que sea una nueva busqueda
        if(currentClassType) {
            containers.pokemonMovesElement.classList.remove(currentClassType);
            containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        //Los volvemos agregar conforme a la primera class
        containers.pokemonMovesElement.cleanList.add(firstClass);
        containers.pokemonAbilitiesElement.cleanList.add(firstClass);
        currentClassType = firstClass;

        //Debo de agregar las etiquetas creadas previamente del froEach
        containers.pokemonTypesContainer.innerHTML = pokemonType;
    }
}