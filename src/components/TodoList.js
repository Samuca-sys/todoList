import TodoItem from "./TodoItem";

import {applyFilter} from './../services/filter'

export default function TodoList(props) {
  const {items, filter} = props;
  const filteredList = applyFilter(items, filter)

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