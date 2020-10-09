import { combineReducers } from 'redux';
import counter from './counter/index';

const reducers = combineReducers({
    counter
});

export default reducers;