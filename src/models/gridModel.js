const gridModel = {};

const getData = (list) => {
    const result = [];
    const data = list ?  list : [ // name, age, weight
        ["Jack", 20, 70],
        ["Lee", 30, 88],
        ["Chuck", 17, 75],
        ["Ralph", 41, 69],
        ["mark", 25, 80]
    ];

    data.forEach((arr) => {
        const user = {
            "name" : arr[0],
            "age" : arr[1],
            "weight" : arr[2]
        };
        
        result.push(user);
    })

    return result;
}

gridModel.getData = getData;

export default gridModel;