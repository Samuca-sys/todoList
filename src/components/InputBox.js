import React from 'react';

export default class InputBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      value: props.value || "" //delare value state, default value is ""
    }
    //binding this to method handleInputBoxChange in the constructor
  
  }
  handleInputBoxChange(event) {
    //it will receive value from value property in real time
    this.setState(
      {value: event.target.value}
    )
  }
  render () {
    return (
    <input 
      type="text"   
      placeholder="Add New" 
      className="add-todo"
      value={this.state.value} //value property will receive value state
      //binding this to method handleInputBoxChange in onChange pproperty
      onChange={this.handleInputBoxChange.bind(this)}/>
    )
  }
}

