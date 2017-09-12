/* React Core */
import React, { Component } from 'react';

/* Third Patry */
import {
  Container,
  Divider,
  Segment,
  Header,
  Image,
} from 'semantic-ui-react';

/* Component */
import ReactTwitter from './../common/ReactTwitter';

/* Style */
import './../../assets/Crow/crow.css';

/* Image */
import TopIcon from './../../assets/img/top-header.png';

class TopComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="crow" height="100%" >
            <div>Welcome PlaygroundGcmae</div>
          </div>
          <div className="crow">
            <ReactTwitter />
          </div>
        </Container>
      </div>
    );
  }
}

export default TopComponent;
