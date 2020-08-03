const { act } = require("react-dom/test-utils");

const initState = {
    value: [0],
    size: 0,
    totalValue: 0
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'increase':
            state.value[action.index] = state.value[action.index] + 1
            return Object.assign({}, state, action, {
                value: state.value,
                totalValue : state.totalValue + 1
            });
            break;
        case 'decrease':
            state.value[action.index] = state.value[action.index] - 1
            return Object.assign({}, state, action, { 
                value: state.value,
                totalValue : state.totalValue - 1
            });
            break;
        case 'resize':
            state.value = Array(action.counterSize).fill(0);
            return Object.assign({}, state, action, { 
                size: action.counterSize,
                totalValue : 0
            });
            break;
        default:
            return state;
    }
}

module.exports = {
    reducer
};