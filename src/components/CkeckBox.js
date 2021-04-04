import React from 'react';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked
    }
  }
  render() {
    return(
      <input type="checkbox" checked="{this.state.isChecked}"/>
    )
  }
}