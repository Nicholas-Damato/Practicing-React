import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }

  handleChange = (value) => {
    this.setState({ inputValue: value });
  };

  addTask = () => {
    this.props.add(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          placeholder="Add to list here"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button onClick={() => this.addTask()}> Add to List </button>
        <button onClick={() => this.props.clearList()}> Clear List </button>
      </div>
    );
  }
}

export default NewTask;
