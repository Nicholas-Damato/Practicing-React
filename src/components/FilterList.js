import React, { Component } from "react";

class FilterList extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
  }

  handleChange = (value) => {
    this.setState({ inputValue: value });
  };

  handleClick = () => {
    this.props.filterList(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div>
        Search:{" "}
        <input
          value={this.state.inputValue}
          onChange={(e) => this.handleChange(e.target.value)}
          placeholder="Search for an item!"
        />
        <button onClick={this.handleClick}> Filter </button>
        <button onClick={this.props.reset}> Reset Filter </button>
      </div>
    );
  }
}

export default FilterList;
