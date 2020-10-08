import React from 'react';
import ReactDOM from 'react-dom';

/** redux */
import { createStore } from 'redux';
import reducers from './reducers'; 
import { Provider } from 'react-redux';

/** source */
import App from './app';

const store = createStore(reducers);

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('app')
    );
}

render(App);
