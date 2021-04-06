import Footer from './Footer';
import Header from './Header';
import InputWrapper from './InputWrapper';
import TodoList from './TodoList';

export default function Content(props) {
  const {items, filter, mode} = props.data;
  const {addNew, handleOnChangeFilter, handleOnChangeStatus} = props.actions;
  const count = items.length;
  
  return (
    <>
      <Header />
      <InputWrapper {...{addNew, mode}}/>
      <TodoList {...{items, filter, handleOnChangeStatus}}/>
      <Footer {...{count, filter, handleOnChangeFilter, mode}}/>
    </>
  )
}