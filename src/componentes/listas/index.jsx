import { useState, useEffect } from 'react';

import './style.css';
import Filtro from '../filtro';

function Listas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1025")
      .then(response => response.json())
      .then(responseData => setData(responseData.results))
      .catch(error => console.error("Error:", error));
  }, []);

  const handleTipoChange = (tipo) => {
    console.log("Tipo seleccionado:", tipo);
    // Puedes hacer lógica con el filtro aquí
  };

  return (
    <>
      <Filtro onTipoChange={handleTipoChange} />
      <section className='c-lista'>
        {data.map((pokemon) => (
          <div className='c-lista-pokemon' key={pokemon.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`}
              alt={`Pokémon ${pokemon.name}`}
              width='auto'
              height='60'
              loading='lazy'
            />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Listas;
