export default function App() {
  let items = [
    {
      id: 1,
      text: 'Learn JavaScript',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Learn React',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Build a React App',
      isCompleted: false,
    }

  ]
  return (
    <div className="container">
      <div className="content">
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
      </div>
    </div>  
  );
}
