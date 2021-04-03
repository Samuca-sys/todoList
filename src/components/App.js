import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

export default function App() {
  let items = [
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
  return (
    <div className="container">
      <div className="content">
        <Header />
        <TodoList items={items}/>
        <Footer count={items.length}/>
      </div>
    </div>  
  );
}
