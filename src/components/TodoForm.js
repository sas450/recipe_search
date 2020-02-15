import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
        id : shortid.generate(),
        text : this.state.text,

    })

    this.setState({
        text : ""
    })
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="input ingredients"
        ></input>
        <button onClick = {this.handleChange}>Add Ingredient</button>
      </form>

    );
  }
}
