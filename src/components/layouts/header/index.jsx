import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import './header.css';

class Header extends React.Component {
  render() {
    return (
      <StickyContainer>
        <Sticky>
          <header className="main-header">
            <h1 className="pull-left">PlayGround GC-Mae</h1>
          </header>
        </Sticky>
      </StickyContainer>
    );
  }
}

export default Header;
