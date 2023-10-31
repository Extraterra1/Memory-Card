import './css/Card.css';

export default function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://rickandmortyapi.com/api/character/avatar/826.jpeg" alt="" />
      </div>
      <div className="card-title">
        <h2>Pikachu</h2>
      </div>
    </div>
  );
}
