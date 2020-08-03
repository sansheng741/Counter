import React from 'react'
import Counter from '../Counter'
import store from '../../store';
import { resizeAction } from '../../action';

class CounterGroup extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { size: 6, totalValue: 0 };
    // }




    // handleIncreaseValue = () =>{
    //     this.setState((prevState) => ({
    //         totalValue: prevState.totalValue + 1
    //     }))
    // }

    // handleDecreaseValue = () =>{
    //     this.setState((prevState) =>({
    //         totalValue : prevState.totalValue - 1
    //     }))
    // }

    // handleTotalValue = (value) =>{
    //     this.setState((prevState) =>({
    //         totalValue : prevState.totalValue - value
    //     }))
    // }


    handleResize = (event) => {
        let size = parseInt(event.target.value);
        if (size !== store.getState().size) {
            //获取action
            const action = resizeAction(size);
            //发送action
            store.dispatch(action);
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
            console.log('subscribe', store.getState())
        })
    }

    render() {
        const initArray = [...Array(store.getState().size).keys()];
        let counterId = 0;
        return (
            <div>
                <div>
                    <label>
                        size
                        <input onBlur={this.handleResize}></input>
                    </label>
                </div>
                <label>
                    totalValue : {store.getState().totalValue}
                </label>
                <label>
                    {
                        initArray.map(key => <Counter key={key} counterId={counterId++} />)
                    }
                </label>

            </div>
        )

        // return (
        //     <div>
        //         <div>
        //             <label>
        //                 size
        //             <input onBlur={this.handleResize}></input>
        //             </label>
        //         </div>
        //         <div>
        //             <label>
        //                 totalValue : {this.state.totalValue}
        //             </label>
        //             {
        //                 initArray.map(key => <Counter key={key} 
        //                     onIncrease={this.handleIncreaseValue} 
        //                     onDecrease={this.handleDecreaseValue} 
        //                     inputSize={this.state.size} 
        //                     countTotalValue={this.handleTotalValue}/>)
        //             }
        //         </div>
        //     </div>
        // )
    }

}

export default CounterGroup;