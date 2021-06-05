import {useState} from 'react'

import classes from "./PrintPosts.module.css";
import Card from "../ui/Card";

export function PrintPosts(props) {
  const [editorIsOpen, setEditorisOpen] = useState()
  function deleteHandler() {
    fetch(
      `https://blogbox-posts-default-rtdb.firebaseio.com/posts/${props.id}.json`,
      {
        method: "DELETE"
      }
    ).then(() => {
      window.location.reload()
    })
  }

  function editHandler() {

  }

  return (
    <li>
      <Card>
        <div className={classes.title}>{props.title}</div>
        <hr className={classes.hr}/>
        <div className={classes.date}>{props.date}</div>
        <div className={classes.content}>{props.content}</div>
        <button className={classes.button} onClick={deleteHandler}>delete</button>
        <button className={classes.button} onClick={editHandler}>Edit</button>
      </Card>
    </li>
  );
}

export default PrintPosts;
