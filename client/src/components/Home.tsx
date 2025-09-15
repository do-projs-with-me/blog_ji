import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="bg-stone-100 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                    📝 Welcome to Posts
                </h1>

                {posts.length === 0 ? (
                    <p className="text-center text-gray-600">No posts found.</p>
                ) : (
                    <div className="grid gap-6">
                        {posts.map(post => (
                            <div
                                key={post.id}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {post.content.slice(0, 100)}...
                                    <Link to={`getdetails/${post.id}`}><span className="font-bold cursor-pointer">ReadMore</span></Link>
                                </p>
                                <p className="text-sm text-gray-500">
                                    by <span className="text-blue-600 font-medium">{post.author.username}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Home;