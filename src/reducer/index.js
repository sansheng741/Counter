const initState = {
    value : 0
}
const reducer = (state = initState,action) =>{
    switch (action.type) {
        case 'increase':
            return Object.assign({},state,action,{value : state.value + 1});
            break;
        case 'decrease':
            return Object.assign({},state,action,{value : state.value - 1});
            break;
        default:
            return state;
    }
}

module.exports = {
    reducer
};