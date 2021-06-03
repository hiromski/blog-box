import { useState } from "react";
import Modal from "../ui/Modal";
import classes from "./Header.module.css";

export function Header() {

　const [postFormisOpen, setPostFormisOpen] = useState(false)

  function postHandler() {
    setPostFormisOpen(true)
  }

  return (
    <div className={classes.banner}>
      <h1 className={classes.title}>BlogBOX</h1>
      <h2 className={classes.subtitle}>Share your life with everyone</h2>
      <button className={classes.post} onClick={postHandler}>
        Post
      </button>
     {postFormisOpen && <Modal /> }
    </div>
    
  );
}

export default Header;
