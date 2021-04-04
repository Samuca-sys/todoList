export default function Filter(props) {
  const { filter, changeFilter } = props
  const getClass = (key) => (key === filter ? 'selected' : '');

  const options = {
      'all': 'All',
      'active': 'Active',
      'completed': 'Completed'
  };

  return (
    <div className="filter-list">
      {Object.keys(options).map(key =>(
        <a onClick={() => changeFilter(key)} className={getClass(key)}>
          {options[key]}
        </a>
      ))}  
    </div>
  )
}