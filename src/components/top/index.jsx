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

const UserNames = [
  'react_devv',
  'voyagesister',
  'ReactJS_News',
  'Angular4U',
  'Docker',
  'angular',
];

class TopComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="crow">
            {
              UserNames.map((username) => {
                return (
                  <ReactTwitter
                    username={username}
                  />
                );
              })
            }
          </div>
        </Container>
      </div>
    );
  }
}

export default TopComponent;
