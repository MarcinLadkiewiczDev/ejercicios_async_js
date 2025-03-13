/* Ejercicio 2

Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon,
 la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.
Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste. */

const getRandomId = (max) => Math.floor((Math.random() * max)+ 1);


const getPokemon = async () => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomId(151)}/`);
        const pokemon = await res.json();
        paintPokemon(pokemon);
        
    } catch (error) {
        alert(error);
    }
}

const paintPokemon = (pokemon) => {
    const pokemonImage =  document.querySelector("img");
    pokemonImage.setAttribute("src", `${pokemon.sprites.front_shiny}`);
    pokemonImage.setAttribute("alt", `${pokemon.name}`);
}

getPokemon();