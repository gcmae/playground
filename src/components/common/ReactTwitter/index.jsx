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
        screenName: 'voyagesister',
      }}
      options={{
        username: 'voyagesister',
        height: '600',
      }}
    />
  );
};

export default ReactTwitter;
