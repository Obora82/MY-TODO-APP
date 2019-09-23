
import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDne: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
    }
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }
  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        <h1 className="title">MY TODO APP</h1>
        <div className="container">
          <input
            type="text"
            className="input-text"
            placeholder="Type item here"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add Item
          </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChnage={() => { }}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      X
                    </button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id="" />
                Learn React
                <button className="oda">X</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
