import Footer from '../ui/Footer';
import Header from '../ui/Header';
import TodoList from '../ui/TodoList';

import {applyFilter, search} from '../../services/filter'

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
  const filteredItems= search(applyFilter(items, filter),query)
  
  return (
    <>
      <Header {...{addNew, mode, query, handleOnChangeSearchBox}}/>
      <TodoList {...{filteredItems, filter, handleOnChangeStatus}}/>
      <Footer {...
        {count, filter, handleOnChangeFilter, mode, handleOnClickChangeMode}
      }/>
    </>
  )
}