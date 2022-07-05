import React,{Component} from "react";

export default class Counter extends Component{

    state={
        // count:0,
        tags: ['tag1', 'tag2', 'tag3'],
        value:this.props.value
    }

    renderTagd(){
        if (this.stage.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    // Instead of these code snippets use an arrow functions
    // handleIncrement(){
    //     console.log('Increment clicked',this);
    // }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement=(e)=>{
        console.log(e);
        this.setState({count:this.state.value + 1})
    }

    doHandleIncrement = () =>{
        this.handleIncrement({id:1});
    }

    render(){
        let classes = this.getBadgeClasses();

        return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formCount()}</span>
            <button onClick={this.doHandleIncrement}>Increment</button>
            <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            <ul>
                {this.renderTagd()}
            </ul>
        </React.Fragment>
        // <div>
        //     {/* //And operation */}
        //     {this.stage.tags.length === 0 && "Please create a new tag!"}
        //     {this.renderTagd()}
        // </div>
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