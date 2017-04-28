/* React Core */
import React from 'react';

/* Semantic */
import {
  Button,
  Grid,
  Header,
} from 'semantic-ui-react';

const DownloadLink = (props) => {
  return (
    <span>
      <Grid
        columns="equal"
        style={{
          marginLeft: '80px',
        }}
      >
        <Grid.Column textAlign="left">
          <Header
            as="h3"
            textAlign="left"
            style={{
              marginBottom: '30px',
            }}
          >
            Windows
          </Header>
          <Button icon="windows" content="ダウンロード" color="blue" href={props.winUrl} />
        </Grid.Column>
        <Grid.Column textAlign="left">
          <Header
            as="h3"
            textAlign="left"
            style={{
              marginBottom: '30px',
            }}
          >
            Mac
          </Header>
          <Button icon="apple" content="ダウンロード" color="black" href={props.macUrl} />
        </Grid.Column>
      </Grid>
    </span>
  );
};

DownloadLink.propTypes = {
  macUrl: React.PropTypes.string,
  winUrl: React.PropTypes.string,
};

export default DownloadLink;
