export default function TodoItem(props) {
  const {item} = props;
  return (
    <li>
      <label>
        <input type="checkbox" value="" className="todo-item"/> {item.text}
      </label>
    </li>
  )
}