import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

    interface Post {
        id: number;
        title: string;
        content: string;
        author: {
            username: string;
        };
    }

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/allPosts")
            .then(res => setPosts(res.data))
            .catch(err => console.error("error fetching posts", err))
    }, []);

    return (
        <>
            <div>
                <div className="max-w-4xl mx-auto mt-10">
                    <h1 className="text-3xl font-bold mb-6">welcome to posts</h1>
                    {posts.length === 0 ? (
                        <p>No posts found</p>
                    ) : (
                        posts.map(post => (
                            <div>
                                <h2 className="text-xl font-semibold" >{post.title}</h2>
                                <p className="text-gray-600">{post.content.slice(0, 100)}...</p>
                                <p className="text-sm text-blue-500">by {post.author.username}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;