import React from 'react';
import * as KeyCode from 'keycode-js';

export default class InputBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      value: props.value || "" //delare value state, default value is ""
    }
  }
  handleInputBoxChange(event) {
    //it will receive value from value property in real time
    this.setState(
      {value: event.target.value}
    )
  }

  handleOnKeyUp(event) {
    if(event.keyCode === KeyCode.KEY_RETURN){//if pressed return key
      //Add new TodoItem
      //Clear the text box
    }
  }

  render () {
    return (
    <input 
      type="text"   
      placeholder="Add New" 
      className="add-todo"
      value={this.state.value} //value property will receive value state
      //binding this to method handleInputBoxChange in onChange property
      onChange={this.handleInputBoxChange.bind(this)}
      onKeyUp={this.handleOnKeyUp.bind(this)}/>
    )
  }
}
