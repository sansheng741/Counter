import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 };
    }


    handleResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        })

    }

    handleIncreaseValue = () =>{
        this.setState((prevState) => ({
            totalValue: prevState.totalValue + 1
        }))
    }

    handleDecreaseValue = () =>{
        this.setState((prevState) =>({
            totalValue : prevState.totalValue - 1
        }))
    }

    handleTotalValue = (value) =>{
        this.setState((prevState) =>({
            totalValue : prevState.totalValue - value
        }))
    }


    render() {
        const initArray = [...Array(this.state.size).keys()];

        return (
            <div>
                <div>
                    <label>
                        size
                    <input onBlur={this.handleResize}></input>
                    </label>
                </div>
                <div>
                    <label>
                        totalValue : {this.state.totalValue}
                    </label>
                    {
                        initArray.map(key => <Counter key={key} 
                            onIncrease={this.handleIncreaseValue} 
                            onDecrease={this.handleDecreaseValue} 
                            inputSize={this.state.size} 
                            countTotalValue={this.handleTotalValue}/>)
                    }
                </div>
            </div>
        )
    }

}

export default CounterGroup;