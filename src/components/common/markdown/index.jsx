/* React Core*/
import React, { Component } from 'react';

/* Third Party */
import {
  Container,
  Segment,
  Divider,
} from 'semantic-ui-react';
import Markdown from 'react-markdown';

/* MarkDown */
import reactTodo from './react-todo/md';

const info = [
  '## 動作確認', '',
  '',
  '### $ git clone ',
  '### $ cd playground-gcmae ',
  '### $ yarn',
  '### $ npm start ',
  '## 以下へアクセス', '',
  '### localhost:3000 ',
  '',
].join('\n');

const markdown = info;

class InfoMd extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   markdown = info;
  //   switch (this.props.location.pathname) {
  //     case '/react-todo':
  //       markdown = reactTodo;
  //       break;
  //     default:
  //
  //   }
  // }

  render() {
    return (
      <Markdown
        source={markdown}
      />
    );
  }
}

InfoMd.propTypes = {
  location: React.PropTypes.object,
};

export default InfoMd;
