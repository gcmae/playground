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
import InfoMd from './../common/markdown';

/* Image */
import TopIcon from './../../assets/img/sidenav.png';

class TopComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Image src={TopIcon} size="small" shape="circular" centered />
          <Header as="h1">
            Welcome To Playground-site of GCMAE
          </Header>
        </Container>
        <Divider />
        <Container>
          <Segment>
            <InfoMd />
          </Segment>
        </Container>
      </div>
    );
  }
}

export default TopComponent;
