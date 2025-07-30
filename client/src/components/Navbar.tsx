import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsLogin(!!user);
    }, []);




    return (
        <>
            <div>
                <div className=" bg-black text-white px-4 py-6 font-bold bg-">
                    <ul className="flex justify-end gap-6">
                        <li className="on hover:underline on hover:text-gray-300  "><Link to='/'>Home</Link></li>
                        <li className="on hover:underline on hover:text-gray-300"><Link to='/createPost'>Write </Link></li>
                        <li className="on hover:underline on hover:text-gray-300">about us</li>
                        <li className="on hover:underline on hover:text-gray-300">blogai</li>
                        {isLogin && (
                            <li className="on hover:underline on hover:text-gray-300">My posts</li>
                        )}
                        {!isLogin && (
                            <>
                                <li className="bg-blue-800 "><Link to='/signin'>login</Link></li>
                                <li className="bg-blue-800 "><Link to='/signup'>SignUp</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;