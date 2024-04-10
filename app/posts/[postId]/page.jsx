import PostCard from "@/components/PostCard";
import PostsPage from "../page";
import { Suspense } from "react";

const loadPost = async (postId) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await resp.json();
  return data;
}

const PostPage = async ({ params }) => {

  const post = await loadPost(params.postId)

  return (
    <div>
      <PostCard post={post} />

      <hr />

      <h3>Otras publicaciones</h3>

      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <PostsPage />
      </Suspense>
    </div>
  )
}

export default PostPage