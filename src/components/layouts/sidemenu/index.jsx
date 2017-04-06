/* React Core */
import React, { Component } from 'react';

/* Third Party */
import { pushRotate as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';
import {
  Image,
  Icon,
} from 'semantic-ui-react';

/* Common */

/* Image */
import ReactIcon from './../../../assets/img/logo.svg';
// import SideNavIcon from './../../../assets/img/sidenav.png';

/* Style */
import './sidemenu.css';

const RadiumLink = Radium(Link);

class SideMenu extends Component {
  render() {
    return (
      <Menu
        pageWrapId={'page-wrap'}
      >
        <h2>
          PlayGround
        </h2>
        <RadiumLink className="menu-item" to="/top">
          <Icon name="home" size="large" />
          <span>Top</span>
        </RadiumLink>
        <RadiumLink className="menu-item" to="/react-todo">
          <Image src={ReactIcon} avatar />
          <span>React-Todo</span>
        </RadiumLink>
      </Menu>
    );
  }
}

export default SideMenu;
