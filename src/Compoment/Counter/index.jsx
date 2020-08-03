import React from 'react'


class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { number: 0, inputSize: 0 }
    }

    render() {
        return (
            <div>
                <button onClick={this.onDecrease}>-</button>
                <span>{this.state.number}</span>
                <button onClick={this.onIncrease}>+</button>
            </div>)
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            number: prevState.number - 1
        }))
        this.props.onDecrease();
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            number: prevState.number + 1
        }));
        this.props.onIncrease();
    }

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

    componentWillUnmount() {
        this.props.countTotalValue(this.state.number);
    }


}

export default Counter;