const increaseAction = () =>{
    return {
        type : 'increase',
    }
}

const decreaseAction = () =>{
    return {
        type : 'decrease',
    }
}

module.exports = {
    increaseAction,
    decreaseAction
};