/* eslint-disable react/prop-types */
import './css/Card.css';

export default function Card({ name, img, setScore, handleClick, id }) {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <div className="card-image">
        <img src={img} alt="" />
      </div>
      <div className="card-title">
        <h2>{name}</h2>
      </div>
    </div>
  );
}
