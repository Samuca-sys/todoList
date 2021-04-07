import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';

export default function Content(props) {
  const {items, filter, mode} = props.data;
  const {addNew, handleOnChangeFilter, handleOnChangeStatus} = props.actions;
  const count = items.length;
  
  return (
    <>
      <Header {...{addNew, mode}}/>
      <TodoList {...{items, filter, handleOnChangeStatus}}/>
      <Footer {...{count, filter, handleOnChangeFilter, mode}}/>
    </>
  )
}