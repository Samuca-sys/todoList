import React from "react";
import * as KeyCode from "keycode-js";

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "", //delare value state, default value is ""
    };
  }
  handleInputBoxChange(event) {
    //it will receive value from value property in real time
    this.setState({ value: event.target.value });
  }

  clear() {
    this.setState({ value: "" });
  }

  handleOnKeyUp(event) {
    const { addNew } = this.props;
    const text = this.state.value.trim(); //remove whitespace
    if (event.keyCode === KeyCode.KEY_RETURN && text) {
      //if pressed return key
      //Add new TodoItem
      addNew(text);
      //Clear the text box
      this.clear();
    }
  }

  render() {
    return (
      <input
        autoFocus
        type="text"
        placeholder="Add New"
        className="add-todo"
        value={this.state.value} //value property will receive value state
        //binding this to method handleInputBoxChange in onChange property
        onChange={this.handleInputBoxChange.bind(this)}
        onKeyUp={this.handleOnKeyUp.bind(this)}
      />
    );
  }
}
