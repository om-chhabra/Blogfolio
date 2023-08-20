import Post from "../components/blogs/Post";
import Create from "../components/blogs/Create";
import PostModal from "../components/blogs/PostModal";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function Blogs() {
  const api_url = import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState([]);
  const [postModalVisible, setPostModalVisible] = useOutletContext();
  const [loading, setLoading] = useState(false);
  function postModalHandler() {
    setPostModalVisible(!postModalVisible);
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${api_url}/post`).then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
    });
  }, [postModalVisible == false]);
  return (
    <>
      <main className="">
        <div className="container mx-auto px-10 pt-6 pb-12 md:flex-row self-center items-center">
          <h1 className="text-3xl font-bold mb-8"> Blogs</h1>
          {loading && <p>Loading Posts...</p>}
          {!loading &&
            (posts.length == 0 ? (
              <p className="text-center md:p-36 py-36 text-xl">No Posts.</p>
            ) : (
              posts.map((post) => (
                <Post
                  key={post._id}
                  id={post._id}
                  cover={post.cover}
                  title={post.title}
                  summary={post.summary}
                  createdAt={post.createdAt}
                />
              ))
            ))}
          {postModalVisible && (
            <PostModal onClose={postModalHandler}>
              <Create onCreate={postModalHandler} />
            </PostModal>
          )}
        </div>
      </main>
    </>
  );
}
export default Blogs;
