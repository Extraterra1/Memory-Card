/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from './Card';
import './css/Game.css';

export default function Game({ characters, setScore }) {
  const [clicked, setClicked] = useState([]);
  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setClicked([]);
      setScore(0);
    } else {
      setClicked([...clicked, id]);
      setScore((score) => score + 1);
    }

    console.log(id);
  };

  return (
    <main className="game">
      <div className="game-container">
        {characters.map((e) => {
          return <Card key={e.id} id={e.id} name={e.name} img={e.image} handleClick={handleClick} />;
        })}
      </div>
    </main>
  );
}
