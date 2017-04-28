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
// import ElectronIcon from './../../../assets/img/electron.svg';
// import SideNavIcon from './../../../assets/img/sidenav.png';

/* Style */
import './sidemenu.css';

const RadiumLink = Radium(Link);

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: null,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick() {
    this.setState({
      menuOpen: false,
    });
  }
  render() {
    return (
      <Menu
        pageWrapId={'page-wrap'}
        isOpen={this.state.menuOpen}
      >
        <h2>
          PlayGround
        </h2>
        <RadiumLink className="menu-item" to="/top" onClick={this.handleMenuClick}>
          <Icon name="home" size="large" />
          <span>Top</span>
        </RadiumLink>
        <RadiumLink className="menu-item" to="/react-todo" onClick={this.handleMenuClick}>
          <Image src={ReactIcon} avatar />
          <span>React-Todo</span>
        </RadiumLink>
      </Menu>
    );
  }
}

// <RadiumLink className="menu-item" to="/react-todo-electron" onClick={this.handleMenuClick}>
//   <Image src={ElectronIcon} avatar />
//   <span>React-Todo(Electron)</span>
// </RadiumLink>

export default SideMenu;
