import Filter from "./Filter"

export default function Footer(props) {
  const {count} = props
  return (
    <footer>
      <nav>
        <div>
          <strong>
          <span>{count} </span>
          </strong>
          <span>items left</span>
        </div>
      <Filter />
      </nav>
    </footer>
  )
}