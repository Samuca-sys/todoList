import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import InputBox from './InputBox';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      items: [
        {
          id: 1,
          text: 'Learn JavaScript',
          isCompleted: false,
        },
        {
          id: 2,
          text: 'Learn React',
          isCompleted: false,
        },
        {
          id: 3,
          text: 'Build a React App',
          isCompleted: false,
        }
      ]
    }
  }  
  addNew(text) {
    let item = {
      id: this.state.items.length + 1,
      text: text
    };
    let updateList = this.state.items.concat([item]);//join items to item array

    this.setState({
      items: updateList
    })
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <Header />
          <InputBox addNew={this.addNew}/>
          <TodoList items={this.state.items}/>
          <Footer count={this.state.items.length}/>
        </div>
      </div>  
    );
  }
}