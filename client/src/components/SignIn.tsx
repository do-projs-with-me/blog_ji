import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn=()=>{

    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const handleSignIn=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!email || !password){
            setError('please enter valid details');
            return;
        }



    }






    return (
        // <>
        <>
            <div>
                <div className="flex items-center align-center justify-center min-h-screen bg-gray-100">
                    <form className="w-full items-center justify-center bg-white border-2 shadow-sm max-w-sm rounded-lg p-4" onSubmit={handleSignIn}>
                    <h2 className="font-semibold b-6 p-2 mb-2 items-center text-center text-2xl">SignUp blog_ji lets write together</h2>
                    <div>
                        <label>email</label>
                        <input className="border w-full rounded px-3 py-2 mb-4" type="email" placeholder="enter email" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>password</label>
                        <input className="border w-full rounded px-3 py-2 mb-4" type="password" placeholder="enter password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>

                    <button className="bg-black text-white p-3 rounded-lg align-center w-full mt-4 ">Submit</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;