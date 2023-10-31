import './css/Card.css';

export default function Card({ name, img }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="" />
      </div>
      <div className="card-title">
        <h2>{name}</h2>
      </div>
    </div>
  );
}
