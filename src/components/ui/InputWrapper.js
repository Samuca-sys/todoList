import InputBox from "./InputBox";
import SearchBox from "./SearchBox";

import {MODE_CREATE, MODE_SEARCH} from '../../services/mode'

export default function InputWrapper(props){
  const {mode, addNew, query, handleOnChangeSearchBox} = props;

  switch (mode) {
    case MODE_CREATE:
      return <InputBox {...{addNew}}/>;

    case MODE_SEARCH:
      return <SearchBox {...{query, handleOnChangeSearchBox}}/>

    default:
      return null;
  }
}