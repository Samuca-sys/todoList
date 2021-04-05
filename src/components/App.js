import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import InputBox from './InputBox';

import {addToList, getAll, updateStatus} from './../services/todo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      filter: 'active',
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
    return (
      <div className="container">
        <div className="content">
          <Header />
          <InputBox addNew={this.addNew.bind(this)}/>
          <TodoList 
            items={this.state.items} 
            filter={this.state.filter} 
            handleOnChangeStatus={this.handleOnChangeStatus.bind(this)}
            {...this.state}
          />
          <Footer 
            count={this.state.items.length} 
            handleOnChangeFilter={this.handleOnChangeFilter.bind(this)}
            {...this.state}
          />
        </div>
      </div>  
    );
  }
}