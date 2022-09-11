import React, { useEffect, useState } from 'react';
import './App.css';
import "./style.css";
import PokeCard from './components/PokeCard';
import axios from 'axios';
function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")
 
  const getAllPokes = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results);
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {//não precisa colocar = antes do parenteses, é um método não uma função
    getAllPokes()
    console.log('entrou no useEffect')
  }, []);

  
 

  const changePokeName = event => {
    setPokeName(event.target.value);
  };
  console.log(pokeList)
  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
       
        {pokeList.map((pokemon) => {
          return (
            <option
              key={pokemon.name}
              value={pokemon.name}
            >
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
