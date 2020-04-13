import React, { Component } from "react";

class Weapons extends Component {
  state = {
    value: "",
    output: [],
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://wf.snekw.com/weapons-wiki`);
    const data = await response.json();
    console.log("bulkBasic", data);

    this.setState({
      value: "",

      output: [data],
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" data-testid="submitButton">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Weapons;
