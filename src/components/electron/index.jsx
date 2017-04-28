/* React Core */
import React, { Component } from 'react';

/* Semantic */
import {
  Icon,
  Modal,
  Button,
  Header,
  Grid,
  Image,
} from 'semantic-ui-react';

/* Component */
import DownloadLink from './DownloadLink';

/* Image */
import DesktopPng from './../../assets/img/desktop.png';

class ReactTodoElectron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.ModalOpen = this.ModalOpen.bind(this);
    this.close = this.close.bind(this);
  }
  ModalOpen() {
    this.setState({ open: true });
  }
  close() {
    this.setState({ open: false });
  }
  render() {
    return (
      <Modal
        trigger={
          <Button
            color="black"
            icon="desktop"
            content="デスクトップ版"
            onClick={this.ModalOpen}
          />
        }
        size="large"
        open={this.state.open}
      >
        <Header
          icon="desktop"
          content="React-Todoデスクトップ版ダウンロード"
        />
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={7} verticalAlign="middle" textAlign="right">
                <DownloadLink
                  macUrl={this.props.macUrl}
                  winUrl={this.props.winUrl}
                />
              </Grid.Column>
              <Grid.Column width={9} verticalAlign="middle">
                <Image src={DesktopPng} centered size="large" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.close}
          >
            <Icon name="remove" /> 閉じる
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

ReactTodoElectron.propTypes = {
  macUrl: React.PropTypes.string,
  winUrl: React.PropTypes.string,
};

export default ReactTodoElectron;
