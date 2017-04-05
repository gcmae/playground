/* React Core */
import React from 'react';
import {
  Router,
  Route,
  hashHistory,
} from 'react-router';

/* Components */
// Index
import PlaygroundGcmae from './../components/App/App';

// Pages
import ReactTodo from './../components/react/reactTodo/components/App';

const Routers = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={PlaygroundGcmae}>
        <Route path="/react-todo" component={ReactTodo} />
      </Route>
    </Router>
  );
};

export default Routers;
