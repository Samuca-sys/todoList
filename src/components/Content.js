import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';

export default function Content(props) {
  const {items, filter, mode, query} = props.data;
  const {
    addNew, 
    handleOnChangeFilter, 
    handleOnChangeStatus, 
    handleOnClickChangeMode,
    handleOnChangeSearchBox
  } = props.actions;
  const count = items.length;
  
  return (
    <>
      <Header {...{addNew, mode, query, handleOnChangeSearchBox}}/>
      <TodoList {...{items, filter, handleOnChangeStatus}}/>
      <Footer {...
        {count, filter, handleOnChangeFilter, mode, handleOnClickChangeMode}
      }/>
    </>
  )
}