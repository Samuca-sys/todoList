import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const {items} = props;

  return (
    <>
      <section>
        <ul className="item-list">
          {/*render list dinamically using array items from App*/}
          {items.map(item => (<TodoItem item={item} key={item.id}/>))}
        </ul>
      </section>
    </>
  )
}