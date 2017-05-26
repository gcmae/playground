/* React Core */
import React, { Component } from 'react';

/* Third Party */
import {
  Container,
  Segment,
  Divider,
} from 'semantic-ui-react';

/* Components */
// Layouts
import SideMenu from './../layouts/sidemenu/';
import StickHeader from './../layouts/header/';
import Footer from './../layouts/footer/';

/* Common */
import SquareLoader from './../common/Loader/squareLoader/';
import InfoMd from './../common/markdown/';

/* Style */
import './App.css';

class PlaygroundGcmae extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        loader: true,
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <StickHeader
          loader
        />
        <SquareLoader
          loader={this.state.loader}
        />
        <div
          hidden={!this.state.loader}
        >
          <SideMenu />
          <main
            id="page-wrap"
          >
            <Container>
              {this.props.children}
            </Container>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

PlaygroundGcmae.propTypes = {
  children: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default PlaygroundGcmae;
