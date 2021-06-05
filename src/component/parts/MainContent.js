import BlogPostForm from "./BlogPostForm";
import PastBlogPosts from "./PastBlogPosts";

export function MainContent() {
  return (
    <div >
      <div >
        <BlogPostForm />
      </div>
      <div style={{textAlign: 'center'}}>
          <PastBlogPosts/>
      </div>
    </div>
  );
}

export default MainContent;
