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
  '# gcmaeの技術結果一覧サイト', '',
  '',
  '### gcmaeの成果物をまとめたサイトです。',
  '',
  '## 動作確認', '',
  '',
  '### 1. Cloneする。',
  '### $ git clone https://github.com/gemcook/playground-gcmae.git ',
  '### 2. プロジェクトフォルダへ移動する。',
  '### $ cd playground-gcmae ',
  '### 3. node_moduleを取得する。',
  '### $ yarn',
  '### 4. 開発サーバを起動する。',
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
