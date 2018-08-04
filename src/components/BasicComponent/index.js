import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class BasicComponent extends Component {
  state = {
    value: ""
  };

  onInputChange = e => this.setState({ value: e.target.value });

  onClick = () => {
    this.props.action(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.onInputChange} />
        <button onClick={this.onClick}>click</button>
        <div>
          {this.props.reducer.map((value, i) => <div key={i}>{value}</div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ reducer }) => {
  return {
    reducer
  };
};

export default connect(
  mapStateToProps,
  actions
)(BasicComponent);
