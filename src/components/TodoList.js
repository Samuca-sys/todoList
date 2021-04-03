import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const {items} = props;

  return (
    <>
      <header>
        <h1>THINGS TO DO</h1>
      </header>

      <section>
        <ul className="list">
          {/*render list dinamically using array items from App*/}
          {items.map(item => (<TodoItem item={item}/>))}
        </ul>
      </section>
    </>
  )
}