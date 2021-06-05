import classes from "./Card.module.css";

export function Card(props) {
  return (
    <div>
      <div className={classes.card}>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Card;