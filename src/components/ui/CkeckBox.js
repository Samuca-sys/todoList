import React from 'react';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked
    }
  }

  handleCheckBoxChange (event) {
    const isChecked = event.target;

    this.setState({ isChecked});
    this.props.onChange(isChecked);
  }

  render() {
    return(
      <input 
        type="checkbox" 
        ischecked={this.state.isChecked} 
        onChange={this.handleCheckBoxChange.bind(this)}
      />
    )
  }
}