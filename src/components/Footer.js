import Filter from "./Filter"

import addImg from './../assets/add.svg'
import searchImg from './../assets/search.svg'

export default function Footer(props) {
  const {count, filter, handleOnChangeFilter} = props
  return (
    <footer>
      <nav>
        <div>
          <img src={addImg} alt="add signal" classname="addImg"/>
          <img src={searchImg} alt="search signal" classname="searchImg"/>
          <strong>
          <span>{count} </span>
          </strong>
          <span>items left</span>
        </div>
      <Filter filter={filter} changeFilter={handleOnChangeFilter}/>
      </nav>
    </footer>
  )
}