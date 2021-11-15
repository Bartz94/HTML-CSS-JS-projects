const maxPokemons = 151;
const pokeBoxContainer = document.querySelector('#container');

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

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
    const typeName = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);

    const cardColor = typeColors[pokemon.types[0].type.name];

    const pokeBoxInnerHTML = `
    <p class="poke_name">#${pokemon.id.toString().padStart(3, '0')} ${name}</p>
     <img class ="pokemon_image" src="${pokemon.sprites.other["official-artwork"].front_default}" width="200" height="200">
    <p class="pokemon_type">${typeName}</p>
    
    <div class="pokemon_stats">
        <p class="hp">HP${pokemon.stats[0].base_stat}</p>
        <p class="atack">ATK${pokemon.stats[1].base_stat}</p>
        <p class="defense">DEF${pokemon.stats[2].base_stat}</p>
    </div>
    `;

    pokemonBox.innerHTML = pokeBoxInnerHTML;
    pokemonBox.classList.add('poke_card');
    pokemonBox.style.backgroundColor = cardColor;
    pokeBoxContainer.appendChild(pokemonBox)
}

getMaxPokemons();