import React, { Component } from "react";
import data from "./data";
import NewTask from "./NewTask";
import Tasks from "./Tasks";
import FilterList from "./FilterList";

class List extends Component {
  constructor() {
    super();
    this.state = { list: data };
  }

  handleAddTask = (task) => {
    this.setState({ list: [...this.state.list, task] });
  };

  clearList = () => {
    this.setState({ list: [] });
  };

  filterList = (value) => {
    let filteredList = [];
    let list = this.state.list;

    if (list.includes(value)) {
      filteredList.push(value);
    }
    this.setState({ list: filteredList });
  };

  reset = () => {
    this.setState({ list: data });
  };

  render() {
    const mappedList = this.state.list.map((e) => {
      return <Tasks key={e} item={e} />;
    });
    return (
      <div>
        <FilterList filterList={this.filterList} reset={this.reset} />
        <NewTask add={this.handleAddTask} clearList={this.clearList} />
        {mappedList}
      </div>
    );
  }
}

export default List;
