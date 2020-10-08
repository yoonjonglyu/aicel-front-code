import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Todo from './view/todo';
import Grid from './view/Grid';
import Modals from './view/modals';
import Counter from './view/counter';
import Async from './view/async';
import NotFound from './view/notfound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Todo} />
                <Route exact path="/grid" component={Grid} />
                <Route exact path="/modals" component={Modals} />
                <Route exact path="/counter" component={Counter} />
                <Route exact path="/async" component={Async} />
                <Route exact component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App;