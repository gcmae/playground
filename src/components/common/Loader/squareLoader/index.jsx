/* React Core */
import React from 'react';

/* Style */
import './load.css';

const SquareLoader = (props) => {
  return (
    <div className="cssload-thecube" hidden={props.loader}>
      <div className="cssload-cube cssload-c1">{null}</div>
      <div className="cssload-cube cssload-c2">{null}</div>
      <div className="cssload-cube cssload-c4">{null}</div>
      <div className="cssload-cube cssload-c3">{null}</div>
    </div>
  );
};

SquareLoader.propTypes = {
  loader: React.PropTypes.bool,
};

export default SquareLoader;
