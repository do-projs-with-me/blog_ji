import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {

    // 1.if user is login then only he will see the mypost
    // 2.first we have to fetch all posts of user 
    // 3.after fetching user can update or delete the post 
    // 4. for that we will require post id which post to delete or update
    const [posts, setPost] = useState('');
    const navigate = useNavigate();


    const fetchUserPost = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/myposts", {
               
            });
            console.log(res.data);
            
            setPost(res.data);
        } catch (error) {
            console.log(error);

        }
    }

    // lets do for deleteing the posts
    const handleDelete = (postId: string) => {

    }

    // lets do for update
    const handleUpdate = () => {

    }
    return (
        <>
            <div>
                <div className="max-w-4xl mx-auto mt-10 ">
                    <h2 className="text-2xl font-bold mb-4">This post is yours</h2>

                    <div>
                        <h3>post title</h3>
                        <p>post content will be here </p>
                        <div className="mt-2 flex gap-3 ">
                            <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800">Edit</button>
                            <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800">Delete</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default MyPosts;