export default function SearchBox(props) {
  const { query, handleOnChangeSearchBox } = props;

  return (
    <input
      autoFocus
      type="text"
      value={query}
      onChange={(event) => handleOnChangeSearchBox(event.target.value)}
      placeholder="Search"
    />
  );
}
