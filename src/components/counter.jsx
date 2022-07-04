import React,{Component} from "react";

export default class Counter extends Component{

    state={
        count:0,
        tags: ['tag1', 'tag2', 'tag3']
    }
    render(){
        let classes = this.getBadgeClasses();

        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formCount()}</span>
            <button>Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.state.count === 0) ? "warning" : "primary";
    }

    formCount(){
        const{count} = this.count;
        return count === 0 ? 'Zero': this.state.count;
    }
}