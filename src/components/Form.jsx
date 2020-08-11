import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    username: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.username);
    const res = await axios.get(
      `https://api.github.com/users/${this.state.username}`
    );
    console.log(res);
    this.props.onSubmit(res.data);
    this.setState({ username: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value })}
          required
        ></input>
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
