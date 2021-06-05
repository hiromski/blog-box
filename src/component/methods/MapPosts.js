import PrintPosts from "./PrintPosts";

export function MapPosts(props) {
  return (
    <ul>
      {props.pastposts.reverse().map((post) => (
        <PrintPosts
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </ul>
  );
}

export default MapPosts;
