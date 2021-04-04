import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import InputBox from './InputBox';

import {addToList, getAll} from './../services/todo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      filter: 'active',
      items: getAll()
    }
  }  
  addNew(text) {
    let updateList = addToList(this.state.items, {text, completed: false});
    this.setState({
      items: updateList
    })
  }

  handleOnChangeFilter(filter) {
    this.setState({filter})
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <Header />
          <InputBox addNew={this.addNew.bind(this)}/>
          <TodoList items={this.state.items} filter={this.state.filter}/>
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