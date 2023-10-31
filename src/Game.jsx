/* eslint-disable react/prop-types */
import { useState } from 'react';
import Swal from 'sweetalert2';
import Card from './Card';
import Toast from './helpers/Toast';
import './css/Game.css';

export default function Game({ characters, setScore, score, setGamesPlayed }) {
  const [clicked, setClicked] = useState([]);
  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setClicked([]);
      setScore(0);
      Toast({ title: 'Wrong! Resetting board...' });
    } else if (score === 11) {
      setScore((score) => score + 1);
      Swal.fire({
        title: 'You won! Max score reached',
        confirmButtonText: 'Start Over'
      }).then((result) => {
        setScore(0);
        setClicked([]);
        setGamesPlayed((num) => num + 1);
      });
    } else {
      setScore((score) => score + 1);
      setClicked([...clicked, id]);
    }
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
