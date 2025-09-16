import axios from "axios";
import { useEffect, useState } from "react";



interface Post {
  id: number;
  title: string;
  content: string;
  author: {
    username: string;
  };
}


const PostDetails=()=>{
    const[id,setId]=useState("");
    const[post,setPost]=useState<Post|null>(null);

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/posts/${id}`)
        .then(res=>setPost(res.data))
        .catch(err=>console.error("error in finding posts",err));
    },[id]);

    if(!post)return <p>no data found</p>


return(
    <>
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-6">by {post.author.username}</p>
      <p className="text-gray-800 leading-relaxed">{post.content}</p>
    </div>
    </>
)
}

export default PostDetails;