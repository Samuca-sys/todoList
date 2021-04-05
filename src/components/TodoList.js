import FilteredList from "./FilteredList";

import {applyFilter} from './../services/filter'

export default function TodoList(props) {
  const {items, filter, handleOnChangeStatus} = props;
  const filteredItems= applyFilter(items, filter)

  return (
    <section>
      <FilteredList 
        items={filteredItems} 
        handleOnChangeStatus={handleOnChangeStatus}
      />
    </section>
  )
}