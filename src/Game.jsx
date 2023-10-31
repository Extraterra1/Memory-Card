import Card from './Card';
import './css/Game.css';

export default function game({ characters }) {
  return (
    <main className="game">
      <div className="game-container">
        {characters.map((e) => {
          return <Card key={e.id} name={e.name} img={e.image} />;
        })}
      </div>
    </main>
  );
}
