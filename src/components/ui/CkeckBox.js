import React from "react";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
  }

  handleCheckBoxChange(event) {
    const {checked} = event.target;

    this.setState({ checked });
    this.props.onChange(checked);
  }

  render() {
    return (
      <input
        type="checkbox"
        checked={this.state.checked}
        onChange={this.handleCheckBoxChange.bind(this)}
      />
    );
  }
}
