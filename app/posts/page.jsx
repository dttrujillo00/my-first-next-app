import PostCard from "@/components/PostCard";

async function loadPosts() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    return data;
}

const PostsPage = async () => {

    const posts = await loadPosts();
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

export default PostsPage