import CheckBox from "./CkeckBox";

export default function TodoItem(props) {
  const {item, completed} = props;
  return (
    <li>
      <label>
        <CheckBox isChecked={completed}/> {item.text}
      </label>
    </li>
  )
}