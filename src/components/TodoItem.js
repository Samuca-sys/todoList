export default function TodoItem(props) {
  const {item} = props;
  return (
    <li key={item.id}>
      <label>
        <input type="checkbox" value="" className="todo-item"/> {item.text}
      </label>
    </li>
  )
}