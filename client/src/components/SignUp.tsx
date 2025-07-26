import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn:React.FC=()=>{


    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const[error,setError]=useState('');
    const navigate=useNavigate();

    const handleSignIn=async(e:React.FormEvent<HTMLFormElement>)=>{//here we cannot write simply (e) we have take it from react
    e.preventDefault();

    if(!name || !email || !password){
        setError('please enter all the fields');
        return;
    }

    try {
        const response=await fetch('http://localhost:5000/api/signUp',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({name:name,email,password})
        });

        const data=await response.json();

        if(response.ok){
            setError('');
            alert('success');
            navigate('/');
        }
        else{
            setError(data.msg || 'failed');
        }


    } catch (error) {
        setError('server Error');
    }

    }



    return(
        <>
            <div>
                <div className="flex items-center align-center justify-center min-h-screen bg-gray-100">
                    <form className="w-full items-center justify-center bg-white border-2 shadow-sm max-w-sm rounded-lg p-4" onSubmit={handleSignIn}>
                        {/* on submit was giving issue here due to e:react.changeEvent<HTMLINPUTELEMENT> this is taking the input 
                        field but we are doing submit here so now we have to make onsumbit for this 
                        after reading came to know that we can use the form event too*/}
                    <h2 className="font-semibold b-6 p-2 mb-2 items-center text-center text-2xl">SignUp blog_ji lets write together</h2>
                    <div>
                        <label className="block">username</label>
                        <input className="border w-full rounded px-3 py-2 mb-4" type="text" placeholder="enter username" required value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
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