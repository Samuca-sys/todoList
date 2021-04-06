import Footer from './Footer';
import Header from './Header';
import InputBox from './InputBox';
import TodoList from './TodoList';

export default function Content(props) {
  const {items, filter} = props.data;
  const {addNew, handleOnChangeFilter, handleOnChangeStatus} = props.actions;
  const count = items.length;
  
  return (
    <>
      <Header />
      <InputBox addNew={addNew}/>
      <TodoList {...{items, filter, handleOnChangeStatus}}/>
      <Footer {...{count, filter, handleOnChangeFilter}}/>
    </>
  )
}