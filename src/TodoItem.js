export default function TodoItem(props) {
  const {item} = props;
  return (
    <li key={item.id}>
      <label>
        <input type="checkbox" value=""/> {item.text}
      </label>
    </li>
  )
}