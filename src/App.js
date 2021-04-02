export default function App() {
  return (
    <div className="container">
        <div className="content">
          <header >
            <h1>THINGS TO DO</h1>
          </header>

          <section>
            <ul className="list">
              <li>
                <label>
                  <input type="checkbox" value=""/> Take ou the trash
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value=""/> Buy bread
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value=""/> Teach penguins to fly
                </label>
              </li>
            </ul>
        </section>
      </div>
    </div>  
  );
}
