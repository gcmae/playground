import React from 'react';

import {
  Accordion,
  Icon,
  Input,
} from 'semantic-ui-react';

import ReactTwitter from './../../common/ReactTwitter';

class ReactTwitterWidgets extends React.Component {
  constructor(props) {
    super(props);
    const usern = localStorage.getItem('UserName');
    this.state = {
      username: usern || 'voyagesister',
    };
    this.handleChangeUserNames = this.handleChangeUserNames.bind(this);
  }
  handleChangeUserNames(e) {
    this.setState({
      username: e.target.value,
    });
    localStorage.setItem('UserName', e.target.value);
  }
  render() {
    return (
      <div>
        <Accordion>
          <Accordion.Title>
            <Icon name="dropdown" />
            Change Account
          </Accordion.Title>
          <Accordion.Content>
            <Input
              placeholder="Search..."
              value={this.state.username}
              onChange={this.handleChangeUserNames}
            />
          </Accordion.Content>
        </Accordion>
        <ReactTwitter
          username={this.state.username || 'voyagesister'}
        />
      </div>
    );
  }
}

export default ReactTwitterWidgets;