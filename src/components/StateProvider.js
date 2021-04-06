import React from 'react';

import {getAll, addToList, updateStatus} from './../services/todo'
import {wrapChildrenWith, objectWithOnly} from './../services/common'

export default class StateProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'all',
      items: getAll()
    }
  }
  addNew(text) {
    let updatedList = addToList(this.state.items, {text, completed: false});
    this.setState({
      items: updatedList
    })
  }

  handleOnChangeFilter(filter) {
    this.setState({filter})
  }

  handleOnChangeStatus(itemId, completed) {
    const updatedList = updateStatus(this.state.items, itemId, completed);

    this.setState({items: updatedList});
  }
  render() {
    let children = wrapChildrenWith(this.props.children, {
      data: this.state,
      actions: objectWithOnly(this, 
        ['addNew', 'handleOnChangeFilter', 'handleOnChangeStatus']
      )
    });
    return <>{children}</>
  }
}