import classes from "./Header.module.css";

export function Header() {
  return (
    <div className={classes.banner}>
      <h1 className={classes.title}>BlogBOX</h1>
      <h2 className={classes.subtitle}>Share your life with everyone</h2>
    </div>
  );
}

export default Header;
