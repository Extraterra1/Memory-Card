/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import './css/Header.css';

export default function Header({ score }) {
  return (
    <nav className="header">
      <span className="title">Memory Game</span>
      <span className="score">Score: {score}</span>
      <div className="socials">
        <span>
          <Icon icon="ion:logo-github" />
        </span>
        <span>
          <Icon icon="ion:logo-twitter" />
        </span>
        <span>
          <Icon icon="ion:logo-youtube" />
        </span>
      </div>
    </nav>
  );
}
