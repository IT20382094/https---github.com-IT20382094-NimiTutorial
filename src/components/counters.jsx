import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component{

    state = {
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }

    handleDelete = (counterId) =>{
        console.log('Event Handle called', counterId);
    }

    render(){
        console.log(this.props);

        return(
            <div>
                {/* {this.props.childern} */}
                {this.state.counters.map(counter =>
                <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} selecter={true}/>)}
                {/* <h4>Counter %{counter.id}</h4> */}
            </div>
        )
    }
}

export default Counters;