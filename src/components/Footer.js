import Filter from "./Filter"

import addImg from './../assets/add.svg'
import searchImg from './../assets/search.svg'

import {MODE_CREATE, MODE_SEARCH} from './../services/mode'

export default function Footer(props) {
  const {count, filter, handleOnChangeFilter, mode} = props
  return (
    <footer>
      <nav>
        <div>
          <img 
            src={addImg} 
            alt="add signal" 
            classname={(mode === MODE_CREATE ? 'selected': '')}
          />
          <img 
            src={searchImg} 
            alt="search signal" 
            classname={(mode === MODE_SEARCH ? 'selected': '')}
          />
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