import { Icon } from '@iconify/react';
import './css/Header.css';

export default function Header() {
  return (
    <nav className="header">
      <span className="title">Memory Game</span>
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
