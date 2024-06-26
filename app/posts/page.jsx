import PostCard from "@/components/PostCard";
import './Posts.css';

async function loadPosts() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    //await new Promise( (resolve) => setTimeout(resolve, 5000) )
    return data;
}

const PostsPage = async () => {

    const posts = await loadPosts();
    console.log(posts)

    return (
        <div className="grid">
            {
                posts.map( post => (
                    <PostCard post={post} key={post.id} />
                ) )
            }
        </div>
    )
}

export default PostsPage