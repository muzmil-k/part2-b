const FormInput = (props) => {
  return (
    <div>
      {props.text}
      <input value={props.value} onChange={props.handleChange} />
    </div>
  );
};
export default FormInput;
