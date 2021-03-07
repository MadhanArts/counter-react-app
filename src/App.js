import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

// React has lifecycle hooks method callbacks which will 
// call when particular event occurs
// Mount ----- constructor, render, componentDidMount
// Update ---- render, componentDidUpdate
// Unmount --- componentWillUnmount




class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // // Mount phase -- first call
  constructor(props)
  {
    super(props);
    console.log("App constructor");
  }

  // // Mount phase -- 3rd call componentDidMount 
  // // 1. It will run when the component is mounted
  // // 2. It can be used when AJAX is used
  componentDidMount() {
    console.log("App mounted");
  }


  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  // Mount phase -- render
  // 1. It will be call after constructor call
  // 2. It is used to design the component and it to the webpage
  //
  render() {
    console.log("App - render");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
