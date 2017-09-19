// React Twitter
import React from 'react';

import {
  Timeline,
} from 'react-twitter-widgets/dist';

const ReactTwitter = (props) => {
  return (
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: props.username,
      }}
      options={{
        username: props.username,
        height: '600',
      }}
    />
  );
};

ReactTwitter.propTypes = {
  username: React.PropTypes.string,
};

export default ReactTwitter;
