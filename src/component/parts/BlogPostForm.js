import classes from "./BlogPostForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";
import Moment from 'moment';

export function BlogPostForm() {
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredContent = contentInputRef.current.value;
    const date = new Date();

    const blogData = {
      title: enteredTitle,
      content: enteredContent,
      date: Moment(date).local().format('LLL')
    };

    fetch("https://blogbox-posts-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify(blogData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      window.location.reload();
    });
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <li>
          <input placeholder="Title" className={classes.titleInput} required ref={titleInputRef}/>
        </li>
        <li>
          <textarea placeholder="Content" className={classes.contentInput} required ref={contentInputRef}/>
        </li>
        <li>
          <button className={classes.post}>Post</button>
        </li>
      </form>
    </Card>
  );
}

export default BlogPostForm;
