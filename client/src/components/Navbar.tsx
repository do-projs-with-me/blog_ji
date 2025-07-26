const Navbar=()=>{
    return (
        <>
        <div>
            <div className=" bg-black text-white px-4 py-6 font-bold bg-">
                <ul className="flex justify-end gap-6">
                    <li className="on hover:underline on hover:text-gray-300  ">Home</li>
                    <li className="on hover:underline on hover:text-gray-300">Posts</li>
                    <li className="on hover:underline on hover:text-gray-300">about us</li>
                    <li className="bg-blue-800 ">login</li>
                    <li className="bg-blue-800 ">SignUp</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;