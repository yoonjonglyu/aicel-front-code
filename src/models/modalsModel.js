const ModalsModel = {};

const getHead = (head) => {
    const result = head.split(' ').join('').length > 0 ? head : "Modal Header";
    
    return result;
}

const getBody = (body) => {
    const result = body.split(' ').join('').length > 0 ? body : "Modal Body";
    
    return result;
}

ModalsModel.getHead = getHead;
ModalsModel.getBody = getBody;

export default ModalsModel;