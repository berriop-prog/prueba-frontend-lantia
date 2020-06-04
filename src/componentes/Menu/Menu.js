import React from 'react';
import './Menu.css'

function Menu(props) {
  return (
    <aside className="menu">
      <div className="menu-button"></div>
      <div className="menu-spacer">
        <div className="spacer-dark"></div>
        <div className="spacer-light"></div>
      </div>
      <div className="menu-logo"></div>
    </aside>
  );
}
export default Menu;
