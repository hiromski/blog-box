import { useEffect, useState } from "react";
import MapPosts from '../methods/MapPosts'

export function PastBlogPosts() {
  const [LoadedPastPosts, setLoadedPastPosts] = useState([]);

  useEffect(() => {
    fetch("https://blogbox-posts-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pastPosts = [];

        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };
          pastPosts.push(post);
        }
        setLoadedPastPosts(pastPosts.reverse())
      });
  }, []);

  return (
      <section>
          <MapPosts pastposts={LoadedPastPosts} />
      </section>
  )
}

export default PastBlogPosts;
