import React from 'react';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import InputBox from './InputBox';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      filter: 'active',
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
      id: this.state.items.length + 1,//next id
      text: text
    };
    let updateList = this.state.items.concat([item]);//join items to item array

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