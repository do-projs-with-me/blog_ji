// import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {

    const {isLogin,logout}=useAuth();
    const navigate=useNavigate();

    // for making navbar transparent on home page without login
    const ishero=location.pathname==="/";

    const handleLogout = () => {
    logout();
    navigate("/");
  };
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkLogin=()=>{
//     const user = localStorage.getItem("user");
//     setIsLogin(!!user);
//     };

//     checkLogin();
//     window.addEventListener("storage",checkLogin);

//     return ()=>window.removeEventListener("storage",checkLogin);

// },[]);

  // for logout created here itself  as it was easy here
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setIsLogin(false);
//     navigate("/"); 
//   };

  return (
    <div className={`w-full px-4 py-6 font-bold flex justify-end gap-6 items-center ${ishero ? "bg-transparent absolute  px-4 py-6 z-20":" bg-black text-white px-4 py-6 font-bold"}`}>
      <ul className="flex justify-end gap-6">
   
        <li className="text-yellow-200 hover:underline hover:text-gray-300">
          <Link to={isLogin ? "/home" : "/"}>Home</Link>
        </li>

        <li className="text-yellow-200 hover:underline hover:text-gray-300">
          <Link to="/create-post">Write</Link>
        </li>
        <li className=" text-yellow-200 hover:underline hover:text-gray-300">About Us</li>
        <li className="text-yellow-200 hover:underline hover:text-gray-300">BlogAI</li>

        {isLogin ? (
          <>
            <li className="text-yellow-200 hover:underline hover:text-gray-300">My Posts</li>
            <li
              className="cursor-pointer hover:underline hover:text-gray-300"
              onClick={handleLogout}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li className=" text-yellow-200 bg-black px-2 rounded hover:bg-blue-600">
              <Link to="/signin" aria-label="Login">Login</Link>
            </li>
            <li className="text-yellow-200 bg-black px-2 rounded hover:bg-blue-600">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
