const increaseAction = (i) =>{
    return {
        type : 'increase',
        index : i
    }
}

const decreaseAction = (i) =>{
    return {
        type : 'decrease',
        index : i
    }
}

const resizeAction = (size) =>{
    return {
        type : 'resize',
        counterSize : size
    }
}


module.exports = {
    increaseAction,
    decreaseAction,
    resizeAction
};