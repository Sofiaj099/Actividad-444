import { useState, useEffect } from 'react'

import './style.css'
import { useParams } from "react-router-dom";


function Pokemon() {
  const{ name } = useParams();
  const [datapoke, setDatapoke] = useState([]);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(responseData => setDatapoke(responseData))
      .catch(error => console.error("Error:", error));
  }, [name]); 

  return (
    <>
    <div>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${datapoke.id}.png`} 
        alt={datapoke.name} 
        width="200"
      />

        <p>{datapoke.name}</p>
        <p>{datapoke.id}</p>
        <p>Altura: {datapoke.height/ 10} m / Peso: {datapoke.weight/ 10} km</p>
        
        </div>
    
    </>
  )

}

export default Pokemon 