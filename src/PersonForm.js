import FormInput from "./FormInput";
import Button from "./Button"

const PersonForm = (props) => {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <FormInput text="name:" value={props.value1} handleChange={props.handleChange1} />
            <FormInput text="number:" value={props.value2} handleChange={props.handleChange2} />
            <Button text="add" type="submit" />
        </form>
    )
}

export default PersonForm;