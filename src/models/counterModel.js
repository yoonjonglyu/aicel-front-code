const CounterModel = {};

const getTitle = (state) => {
    let result;

    if(state === "+"){
        result = "increment";
    } else if(state === "-"){
        result = "decrement";
    } else {
        result = "waiting...";
    }

    return result;
}

CounterModel.getTitle = getTitle;

export default CounterModel;