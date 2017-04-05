/* React Core */
import React, { Component } from 'react';

/* Third Party */

/* Components */
import SideMenu from './../layouts/sidemenu/';
import Header from './../layouts/header/';

/* Common */

/* Style */
import './App.css';

class PlaygroundGcmae extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <SideMenu />
        <Header />
        <main
          id="page-wrap"
        >
          {this.props.children}
        </main>
      </div>
    );
  }
}

PlaygroundGcmae.propTypes = {
  children: React.PropTypes.object,
};

export default PlaygroundGcmae;
