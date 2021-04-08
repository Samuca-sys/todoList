import ButtonWrapper from "./ButtonWrapper";
import Filter from "./Filter";
import Info from "./Info";

export default function Footer(props) {
  const { count, filter, handleOnChangeFilter, mode } = props;
  return (
    <footer>
      <nav>
        <div>
          <ButtonWrapper {...props} />
          <strong>
            <span>{count} </span>
          </strong>
          <span>items left</span>
        </div>
        <Filter filter={filter} changeFilter={handleOnChangeFilter} />
      </nav>
      <Info {...{ mode }} />
    </footer>
  );
}
