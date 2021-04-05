const Filter = (props) => {
  return (
    <div>
      filter shown with
      <input type="text" value={props.value} onChange={props.handleFilter} />
    </div>
  );
};
export default Filter;
