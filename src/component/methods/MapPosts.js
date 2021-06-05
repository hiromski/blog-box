import PrintPosts from "./PrintPosts";

function MapPosts(props) {
  return (
    <ul>
      {props.pastposts.map((post) => {
        <PrintPosts
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
        />;
      })}
    </ul>
  );
}

export default MapPosts;
