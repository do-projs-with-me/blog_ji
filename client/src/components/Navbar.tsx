import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLogin(!!user);
  }, []);

  // for logout created here itself  as it was easy here
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLogin(false);
    navigate("/"); 
  };

  return (
    <div className="bg-black text-white px-4 py-6 font-bold">
      <ul className="flex justify-end gap-6">
   
        <li className="hover:underline hover:text-gray-300">
          <Link to={isLogin ? "/home" : "/"}>Home</Link>
        </li>

        <li className="hover:underline hover:text-gray-300">
          <Link to="/create-post">Write</Link>
        </li>
        <li className="hover:underline hover:text-gray-300">About Us</li>
        <li className="hover:underline hover:text-gray-300">BlogAI</li>

        {isLogin ? (
          <>
            <li className="hover:underline hover:text-gray-300">My Posts</li>
            <li
              className="cursor-pointer hover:underline hover:text-gray-300"
              onClick={handleLogout}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li className="bg-blue-800 px-2 rounded hover:bg-blue-600">
              <Link to="/signin">Login</Link>
            </li>
            <li className="bg-blue-800 px-2 rounded hover:bg-blue-600">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
