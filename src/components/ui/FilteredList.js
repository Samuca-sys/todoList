import TodoItem from './TodoItem'

export default function FilteredList(props) {
  const {items, handleOnChangeStatus} = props;

      
  if(items.length === 0) {
    return (
      <p>There are no items.</p>
    )
  }
  
  return (
    <ul className="item-list">
      {/*render list dinamically using array items from App*/}
      {items.map(item => 
        (<TodoItem 
          key={item.id} 
          item={item} 
          handleChangeStatus={handleOnChangeStatus}
        />))}
    </ul>
  )
}