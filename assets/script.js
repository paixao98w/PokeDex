 const pokemonName = document.querySelector('.nomepokemon');
 const imgpokemon = document.querySelector('.imgpokemon');
 const form = document.querySelector('.form');
 const input = document.querySelector('.input_search');


 
 const consultapokemon = async (pokemon) => {
    const resultadopokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const dados = await resultadopokemon.json();
    return dados;
}
const render = async (pokemon) => {

        const dados = await consultapokemon(pokemon);

        pokemonName.innerHTML =  dados.name;
        imgpokemon.src = dados.sprites.front_default;
}
 
form.addEventListener('submit', (event) => {

    event.preventDefault();

    render(input.value);

}
)