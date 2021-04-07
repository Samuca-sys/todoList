import React from 'react';

import {wrapChildrenWith} from './../util/common'
import {getNextModeByKey} from './../services/mode'

export default class KeyStrokeHandler extends React.Component {
  constructor() {
    super();
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  escFunction(event){
    if(event.keyCode === 27){
      console.log("oi")
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyUp, false);
  }

  handleKeyUp(event) {
    const {mode} = this.props.data;
    const nextMode = getNextModeByKey(mode, event.keyCode);
    
    if(nextMode !== mode) {
      event.preventDefault();
      this.props.actions.handleOnClickChangeMode(nextMode)
    }
  }

  render() {
    return (
      <>{wrapChildrenWith(this.props.children, this.props)}</>
    )
  }
}