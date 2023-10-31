import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Game from './Game';

const apiURL = 'https://rickandmortyapi.com/api/character/';
const randomIds = Array.from(Array(12).keys()).map((e) => Math.floor(Math.random() * 826) + 1);

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const { data } = await axios.get(apiURL + randomIds.toString());
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      <Header />
      <Game characters={characters} />
    </>
  );
}

export default App;
