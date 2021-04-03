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
  render() {
    return (
      <div className="container">
        <div className="content">
          <Header />
          <InputBox />
          <TodoList items={this.state.items}/>
          <Footer count={this.state.items.length}/>
        </div>
      </div>  
    );
  }
}