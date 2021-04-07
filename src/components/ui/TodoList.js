import FilteredList from "./FilteredList";

export default function TodoList(props) {
  const {handleOnChangeStatus, filteredItems} = props;

  return (
    <section>
      <FilteredList 
        items={filteredItems} 
        handleOnChangeStatus={handleOnChangeStatus}
      />
    </section>
  )
}