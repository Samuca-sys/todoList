export default function Filter(props) {
    const { filter } = props
    const options = {
      'all': 'All',
      'active': 'Active',
      'completed': 'Completed'
    };

    return (
      <div className="filter-list">
        {Object.keys(options).map(key =>(
          <a 
            key={key} 
            className={key === filter ? 'selected' : ''}
          >
            {options[key]}
          </a>
        ))}  
      </div>
    )
}