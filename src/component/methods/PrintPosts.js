import Card from "../ui/Card";

export function PrintPosts(props) {
  console.log("printpost");
  console.log(props);
  return (
    <li>
      <Card>
        <h1>{props.title}</h1>
        <div>{props.date}</div>
        <div>{props.content}</div>
        <button>delete</button>
      </Card>
    </li>
  );
}

export default PrintPosts;
