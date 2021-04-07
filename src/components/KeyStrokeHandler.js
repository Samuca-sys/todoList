import React from 'react';

import {wrapChildrenWith} from './../util/common'
import {getNextModeByKey} from './../services/mode'

export default class KeyStrokeHandler extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyUp.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyUp)
  }

  handleKeyUp(event) {
    const {mode} = this.props.data;
    const nextMode = getNextModeByKey(mode, event.KeyCode);
    console.log(mode, event.KeyCode)
    
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