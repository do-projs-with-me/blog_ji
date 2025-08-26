import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const SignIn = () => {
    const {login}=useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

        const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!email || !password) {
                setError('please enter valid details');
                return;
            }

            try {
                const response = await fetch("http://localhost:5000/api/signIn", {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                    credentials:'include'
                });
                // localStorage.setItem("userId",response.id)

                // const text=await response.text();
                // console.log(text);
                
                // // const data = await response.json();
                // const data=JSON.parse(text);
                 let data:any;
                 let text:string;
        try {
             text = await response.text(); // get raw text
    console.log("🔎 Raw response from backend:", text);
    data = JSON.parse(text);
        } catch (jsonError) {
            
            throw new Error('Invalid server response');
        }

                if (response.ok) {
                    login(data.user);
                    // localStorage.setItem('')
                    if(data.token){
                    localStorage.setItem('token', data.token);

                    }
                    setError('');
                    alert('success');
                    navigate('/Home');
                }
                else {
                    alert(data.msg || 'invlaid credentials')
                }
            } catch (error) {
                alert(error);
                console.log(error);
                
            }
        };

    return (
        <>
            <div>
                <div className="flex items-center align-center justify-center min-h-screen bg-stone-200">
                    <form className="w-full items-center justify-center bg-white border-2 shadow-sm max-w-sm rounded-lg p-4" onSubmit={handleSignIn}>
                        <h2 className="font-semibold b-6 p-2 mb-2 items-center text-center text-2xl">SignUp blog_ji lets write together</h2>
                        <div>
                            <label>email</label>
                            <input className="border w-full rounded px-3 py-2 mb-4" type="email" placeholder="enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>password</label>
                            <input className="border w-full rounded px-3 py-2 mb-4" type="password" placeholder="enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button className="bg-black text-white p-3 rounded-lg align-center w-full mt-4 ">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;