import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Game from './Game';
import shuffle from './helpers/shuffle';

const apiURL = 'https://rickandmortyapi.com/api/character/';

function App() {
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      const randomIds = Array.from(Array(12).keys()).map((e) => Math.floor(Math.random() * 826) + 1);
      const { data } = await axios.get(apiURL + randomIds.toString());
      setCharacters(data);
    };
    fetchCharacters();
  }, [gamesPlayed]);

  useEffect(() => {
    setCharacters(shuffle(characters));
  }, [score, characters]);

  return (
    <>
      <Header score={score} />
      <Game characters={characters} setScore={setScore} setGamesPlayed={setGamesPlayed} score={score} />
    </>
  );
}

export default App;
