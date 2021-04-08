import addImg from "../../assets/images/add.svg";
import searchImg from "../../assets/images/search.svg";

import { MODE_NONE, MODE_CREATE, MODE_SEARCH } from "../../services/mode";

export default function ButtonWrapper(props) {
  const { handleOnClickChangeMode, mode } = props;
  const isCreateMode = () => mode === MODE_CREATE;
  const isSearchMode = () => mode === MODE_SEARCH;
  return (
    <>
      <img
        src={addImg}
        alt="add signal"
        className={isCreateMode() ? "selected" : ""}
        onClick={() =>
          handleOnClickChangeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)
        }
      />
      <img
        src={searchImg}
        alt="search signal"
        className={isSearchMode() ? "selected" : ""}
        onClick={() =>
          handleOnClickChangeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)
        }
      />
    </>
  );
}
