import addImg from './../assets/add.svg'
import searchImg from './../assets/search.svg'

import {MODE_CREATE, MODE_SEARCH} from './../services/mode'

export default function ButtonWrapper(props) {
  const {mode} = props
  return (
    <>
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
    </>
  )
}