//mutate a copy without changing the original source
import update from 'immutability-helper';

// Get the list of todo array
// @return {Array} 

export function getAll() {
  return [
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

export function getItemById(itemId) {
  return getAll().find(item => item.id === itemId);//find the first element
}

export function updateStatus(items, itemId, completed) {
  //find the first element index
  let index = items.findIndex(item => item.id === itemId);

  //returns a new list of data with updated item.
  return update(items, {
    [index]: {completed: {$set: completed}}//$set => immutability-helper package
  })
}

// A counter to generate a unique id for a todo item.
// @type {Number}

let todoCounter = 1;
function getNextId() {
  return getAll().length + todoCounter++;// |3| => constant + (?) => variable
}

//Adds a new item on the list and returns the new updated list (immutable).
//@param {Array} list
//@param {Object} list
//@param {Array} 

export function addToList(list, data) {
  let item = Object.assign({//join array to a new item
    id: getNextId()
  }, data)
  return list.concat([item]);//same as this.state.items.concat([item]);
  //join items to item array
}