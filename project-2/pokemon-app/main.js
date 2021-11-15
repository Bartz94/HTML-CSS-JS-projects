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
    createPokemonBox(pokemon)
    console.log(pokemon)
}

function createPokemonBox(pokemon) {
    const pokemonBox = document.createElement('div');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);;


    const pokeBoxInnerHTML = `
    <p class="poke_name">#${pokemon.id} ${name}</p>
     <img class ="pokemon_image" src="${pokemon.sprites.other["official-artwork"].front_default}" width="200" height="200">
    `;

    pokemonBox.innerHTML = pokeBoxInnerHTML;
    pokemonBox.classList.add('poke_card')
    pokeBoxContainer.appendChild(pokemonBox)
}

getMaxPokemons();