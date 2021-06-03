import classes from "./Form.module.css";

export function Form(props) {
  return (
    <div>
      <div className={classes.form}>
        <div>{props.children} </div>
      </div>
    </div>
  );
}

export default Form;
