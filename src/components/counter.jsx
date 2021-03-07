import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   //tags: ["tag1", "tag2", "tag3"],
  // };

  // constructor() {
  //   super();
  //   //console.log("Constructor", this);
  //   //this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // styles = {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //   return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  // }

  // handleIncrement() {
  //   console.log("Increment clicked", this.state.count);
  // }

  // handleIncrement = () => {
  //   //console.log("Increment clicked", product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  // Update Phase
  // It can be used to check whether the state is updated or not
  // If not updated, we can make AJAX call to fewtch data
  componentDidUpdate(prevProps, prevState)
  {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }


  // It will be called before the component is deleted or removed
  // We can use it to remove all the listeners or depending variables of that component
  componentWillUnmount() {
    console.log('Counter - unmount');
  }

  render() {
    //    console.log(this.props);
    console.log("counter - render");
    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={
            /*() => this.handleIncrement({ id: 1 })*/ /* this.handleIncrement*/
            () => this.props.onIncrement(this.props.counter)
          }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* <ul>
          {this.state.tags.length === 0 && "Please create a new tag"}
          {this.renderTags()}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
