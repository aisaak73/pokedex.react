//La ruta principal para consultar a la API 
const pokeapi = "https://pokeapi.co/api/v2/";

const fetchPokemons = async () =>{
    //https://pokeapi.co/api/v2/pokemon/?limit=150

    //Obtener los 150 Pokemons iniciales
    const endpoint = `${pokeapi}pokemon/?limit=150`;

    //Realizar la peticion a la API. Debe ser asincrona.
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data);

    return data;
};

export default fetchPokemons;