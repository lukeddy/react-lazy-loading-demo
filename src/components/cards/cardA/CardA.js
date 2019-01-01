import React from 'react';
import img from './cardA.jpg';
import './cardA.css';


const headerImg = {
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: '0 0',
  backgroundRepeat: 'no-repeat',
  height: 145,
  width: '100%',
  opacity: '1',
  position: 'relative',
  zIndex: 500
};

export default (props) => (
  <aside className="cardA">
    <header className="cardA-header" style={headerImg}></header>
    <main className="cardA-body">
      <h1 className="cardA-title center">Captain America: The Winter Soldier</h1>
      <p>
      As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.
      </p>
    </main>
    <footer className="cardA-footer">
      <i className="ico far fa-heart" title="add as favorite"></i>
      <i className="ico fas fa-share-alt" title="share"></i>
      <i className="ico fab fa-instagram" title="post on Instagram"></i>
    </footer>
  </aside>
);