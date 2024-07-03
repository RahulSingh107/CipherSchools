import { Component, useState } from "react";

export default class ToDoScreen extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="screen">
        <h1 className="ui heading center"> ToDo List</h1>
        <div>
          <button
            onClick={(e) => {
              this.setState({ ...this.state, count: this.state.count + 1 }); //Using state is mandatory to manipulate a variables
              console.log(this.count);
            }}
            className="ui secondary button"
          >
            Add Task
          </button>
          <p>The number of task are {this.state.count}</p>
        </div>
      </div>
    );
  }
}
