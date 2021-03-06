/* React Core */
import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
} from 'react-router';

/* Components */
// Index
import PlaygroundGcmae from './../components/App/App';

// Pages
import TopComponent from './../components/top/';
import ReactTodo from './../components/react/reactTodo/components/App';
import ReactTodoElectron from './../components/electron/';
import ReactGeneratePdf from './../components/react/reactPrintout/';
import ReactTwitterWidgets from './../components/react/reactTwitter/';

const Routers = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={PlaygroundGcmae}>
        <IndexRoute component={TopComponent} />
        <Route path="/top" component={TopComponent} />
        <Route path="/react-todo" component={ReactTodo} />
        <Route path="/react-todo-electron" component={ReactTodoElectron} />
        <Route path="/react-generate-pdf" component={ReactGeneratePdf} />
        <Route path="/react-twitter" component={ReactTwitterWidgets} />
      </Route>
    </Router>
  );
};

export default Routers;
