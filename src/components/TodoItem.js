import CheckBox from "./CkeckBox";

export default function TodoItem(props) {
  const {item, handleChangeStatus} = props;
  const handleCheckBoxChange = 
    (checked) => handleChangeStatus(item.id, checked);
  return (
    <li>
      <label>
        <CheckBox 
          checked={item.completed} 
          onChange={handleCheckBoxChange}
        /> {item.text}
      </label>
    </li>
  )
}