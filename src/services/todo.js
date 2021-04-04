
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

export function createNew(text) {
  let nextId = this.state.items.length + 1;
    let item = {
      id: nextId,
      text: text
    };
  return item;
}
