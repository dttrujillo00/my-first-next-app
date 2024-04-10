import PostCard from "@/components/PostCard";

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
    </div>
  )
}

export default PostPage