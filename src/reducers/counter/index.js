import * as types from '../../actions/ActionTypes';

const initialState = {
    counter : 0
};

const counter = (state = initialState, action) => {
    switch(action.type){
        case types.INCREMENT :
            return {
                ...state,
                counter : state.counter + 1
            };
        case types.DECREMENT :
            return {
                ...state,
                counter : state.counter - 1
            };
        default :
            return state;

    }
}
export default counter;