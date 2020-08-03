import React from 'react'
import store from '../../store';
import { increaseAction } from '../../action';
import { decreaseAction } from '../../action';


class Counter extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = { number: 0, inputSize: 0 }
    // }

    onDecrease = () => {
        //获取action
        const action = decreaseAction();
        //发送action
        store.dispatch(action);
    }

    onIncrease = () => {
        //获取action
        const action = increaseAction();
        //发送action
        store.dispatch(action);
    }

    componentDidMount() {

        store.subscribe(() => {
            this.setState({})
            console.log('subscribe', store.getState())
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <span>{store.getState().value}</span>
                <button onClick={this.onIncrease}>+</button>
            </div>)
    }

    // onDecrease = () => {
    //     this.setState((prevState) => ({
    //         number: prevState.number - 1
    //     }))
    //     this.props.onDecrease();
    // }

    // onIncrease = () => {
    //     this.setState((prevState) => ({
    //         number: prevState.number + 1
    //     }));
    //     this.props.onIncrease();
    // }

    /**
     * 
     * @param {*} nextProps 父类的数据
     * @param {*} prevState 本类的数据
     */
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.inputSize !== prevState.inputSize) {
    //       return {
    //         number: 0,
    //         inputSize : nextProps.inputSize
    //       };
    //     }
    //     return null;
    //   }

    // componentWillUnmount() {
    //     this.props.countTotalValue(this.state.number);
    // }


}

export default Counter;