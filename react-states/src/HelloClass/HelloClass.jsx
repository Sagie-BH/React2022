import React, { Component } from "react";
import { helloBuilder, ageStr } from "../Hello/helloLogic";

export class HelloClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className={this.props.classCss}>
        {helloBuilder(this.props.name)}
        <br></br>
        {ageStr + this.props.age}
        <h1>Change State</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add Count
        </button>
        <p>You clicked {this.state.count} times</p>
      </div>
    );
  }
}

export default HelloClass;
