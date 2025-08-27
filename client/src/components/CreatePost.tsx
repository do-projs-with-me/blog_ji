import axios from "axios";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

//how to check that user will login details can only create the post 
// should i give minimum text for content

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

  
    const handleCreatePost = async (e: React.FormEvent) => {
        e.preventDefault();

          
        
        if (!title || !content) {
            alert('please enter all the details');
            return;
        }

        const authorId=localStorage.getItem("userId");

        try {
            

            const res = await axios.post("http://localhost:5000/api/createPost", {
                title, content,authorId
            },);

            console.log('post creates', res.data);
            navigate('/home');


        } catch (error) {
            console.log(error);

            alert('failed to create a blog')
        }
    }

    //see the differne betweeen the fetch and axios.post how both are differnt and how they  work


    return (
        
            <div className="bg-stone-200">
                <div className="max-w-4xl mx-auto mt-10 p-4  border rounded-md shadow-md  ">
                    <h1 className="text-2xl font font-bold text-gray-800 mt-5 mb-4">weclome to create a new blog </h1>
                    <form className="space-y-4 " onSubmit={handleCreatePost}>
                        <div>
                            <label className="mt-5 font-bold">Title</label>
                            <input className="w-full px-4 py-2 border rounded-xl mt-1 mb-4 " type="text" placeholder="enter the title of blog" min={10} value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label className=" font-bold">content</label>
                            <textarea className="w-full px-4 py-3 rounded-lg border  resize-y transition-all h-40 mt-1  " placeholder="write the blog content" value={content} onChange={(e) => setContent(e.target.value)} />
                        </div>
                        <button type="submit" className="flex items-center justify-center mt-5   bg-black text-white p-3 rounded  on hover:bg-gray-300 on hover:text-black border-2  ">Create blog</button>
                    </form>
                </div>

            </div>
        
    )
}
export default CreatePost;