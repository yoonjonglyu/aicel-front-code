const gridModel = {};

const getData = (list) => {
    const result = [];
    const data = list ?  list : [ // name, age, weight
        ["Jack", 20, 70],
        ["Lee", 30, 88],
        ["Chuck", 17, 75],
        ["Ralph", 41, 69],
        ["Mark", 25, 80]
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

const searchData = (dataList, keyword) => {
    const state = Array.from(dataList);
    const result = state.filter((obj) => {
        let check = false;
        if(obj.name.includes(keyword)){
            check = true;
        } else if(obj.age.toString().includes(keyword)){
            check = true;
        } else if(obj.weight.toString().includes(keyword)){
            check = true;
        }
        
        return check;
    })
    return result;
}

const getSortData = (list) => {
    const state = list ? list : [
        {
            "isAvail" : '',
            "sort" : "asc",
        },
        {
            "isAvail" : '',
            "sort" : "asc",
        },
        {
            "isAvail" : '',
            "sort" : "asc",
        }
    ];

    const result = state.map((obj) => {
        obj.isAvail = '';

        return obj;
    })

    return result;
}

const setSortOrder = (order) => {
    let result;
    if(order === "asc"){
        result = "desc";
    } else {
        result = "asc";
    }

    return result;
}

const dataSort = (dataList, sortList) => {
    const result = Array.from(dataList);
    for(let int = 0; int < sortList.length; int++){
        if(sortList[int].isAvail === "active") {
            const keys = Object.keys(result[0]);
            const keyName = keys[int]
            const sort = sortList[int].sort;
            result.sort((a, b) => {
                let resultA, resultB;
                if(sort === "desc") {
                    resultA = 1;
                    resultB = -1;
                } else {
                    resultA = -1;
                    resultB = 1;
                }

               if(a[keyName] > b[keyName]){
                    return resultA;
               } else if(a[keyName] < b[keyName]){
                   return resultB;
               }
            });
        }
    }

    return result;
}

gridModel.getData = getData;
gridModel.searchData = searchData;
gridModel.getSort = getSortData;
gridModel.setOrder = setSortOrder;
gridModel.dataSort = dataSort;

export default gridModel;