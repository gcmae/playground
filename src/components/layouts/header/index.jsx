/* React Core */
import React from 'react';

/* Third Party */
import {
  StickyContainer,
  Sticky,
} from 'react-sticky';

/* Style */
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StickyContainer>
        <Sticky>
          <header className="main-header" hidden={this.props.loader}>
            <h1 className="pull-left">PlayGround</h1>
          </header>
        </Sticky>
      </StickyContainer>
    );
  }
}

Header.propTypes = {
  loader: React.PropTypes.bool,
};

export default Header;
