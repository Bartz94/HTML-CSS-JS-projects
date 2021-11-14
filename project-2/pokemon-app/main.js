const maxPokemons = 151;
const pokeBoxContainer = document.querySelector('#container');

const getMaxPokemons = async () => {
    for (let i = 1; i <= maxPokemons; i++) {
        await getPokemon(i);
    }
}


const getPokemon = async id => {
    const link = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(link);
    const pokemon = await res.json();
    console.log(pokemon.name)
}


getMaxPokemons();