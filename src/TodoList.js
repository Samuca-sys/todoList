export default function TodoList(props) {
  const {items} = props;

  return (
    <>
      <header >
        <h1>THINGS TO DO</h1>
      </header>

      <section>
        <ul className="list">
          {/*render list dinamically using array items  */}
          {items.map(item => (
            <li key={item.id}>
              <label>
                <input type="checkbox" value=""/> {item.text}
              </label>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}