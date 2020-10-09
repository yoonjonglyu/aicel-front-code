const AsyncModel = {};

const getData = async (city) => {
    const result = {};

    try {
        let state;
        state = await fetch(`https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`);
        state = await state.json();

        if(!state.error){
            result.city = state.city;
            result.weather = state.current.weather;
            result.datetime = state.current.date;
            result.date = state.current.date.split('T')[0];
            result.img = state.image_url;
        }

        return result;
    } catch(e) {
        console.error(e);
        return result;
    }
}

const getCity = (target) => {
    const cityList = ["Seoul", "Tokyo", "Beijing", "Toronto"];
    let index;

    if(target > cityList.length){ // getter setter...;
        index = (cityList.length - 1);
    } else if(target < 0){
        index = 0;
    } else {
        index = target ? target : 0;
    }

    const result = cityList[index];
    return result;
}

AsyncModel.getData = getData;
AsyncModel.getCity = getCity;

export default AsyncModel;