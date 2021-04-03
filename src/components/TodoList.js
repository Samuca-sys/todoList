import Header from "./Header";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const {items} = props;

  return (
    <>
      <Header />
      <section>
        <ul className="list">
          {/*render list dinamically using array items from App*/}
          {items.map(item => (<TodoItem item={item}/>))}
        </ul>
      </section>
    </>
  )
}