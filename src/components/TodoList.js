import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const {items, filter} = props;
  const filteredList = applyFilter(items, filter)

  function applyFilter(list, filter) {
    switch (filter) {
      case 'completed':
        return list.filter(item => item.completed === true);
      case 'active':
        return list.filter(item => item.active !== true);
    default: return list;
    }
  }

  return (
    <>
      <section>
        <ul className="item-list">
          {/*render list dinamically using array items from App*/}
          {filteredList.map(item => (<TodoItem item={item} key={item.id}/>))}
        </ul>
      </section>
    </>
  )
}