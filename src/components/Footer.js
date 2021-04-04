import Filter from "./Filter"

export default function Footer(props) {
  const {count, filter} = props
  return (
    <footer>
      <nav>
        <div>
          <strong>
          <span>{count} </span>
          </strong>
          <span>items left</span>
        </div>
      <Filter filter={filter} />
      </nav>
    </footer>
  )
}