import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

import './sidemenu.css';

const RadiumLink = Radium(Link);

class SideMenu extends Component {
  render() {
    return (
      <Menu
        pageWrapId={'page-wrap'}
      >
        <h2>
          画像
        </h2>
        <RadiumLink className="menu-item" to="/">Top</RadiumLink>
        <RadiumLink className="menu-item" to="/react-todo">React-Todo</RadiumLink>
      </Menu>
    );
  }
}

export default SideMenu;
