import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Todo from './controller/todo';
import Grid from './controller/grid';
import Modals from './controller/modals';
import Counter from './controller/counter';
import Async from './controller/async';
import NotFound from './view/notfound';

const App = () => {
    return (
        <Router basename="/aicel-front-code">
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