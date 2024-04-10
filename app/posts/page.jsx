import PostCard from "@/components/PostCard";

async function loadPost() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    return data;
}

const PostPage = async () => {

    const posts = await loadPost();
    console.log(posts)

    return (
        <div>
            {
                posts.map( post => (
                    <PostCard post={post} key={post.id} />
                ) )
            }
        </div>
    )
}

export default PostPage