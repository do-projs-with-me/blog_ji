import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate=useNavigate();
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video autoPlay loop muted className="absolute  z-0" src="/background.mp4" >does not support this video </video>


        <div className="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-br px-4">
            <div className="bg-white bg-opacity-90 p-10 md:p-16 rounded-xl shadow-2xl text-center max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                    Welcome to Our Blog Platform
                </h1>
                <p className="text-lg md:text-xl italic text-gray-600 mb-8">
                    “Blogging is not just about sharing ideas — it's about making your words matter and impacting lives.”
                </p>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-md"
                    onClick={() =>navigate('/signUp')}
                >
                    Start Writing Your Blog
                </button>
            </div>
        </div>
       
        </div>
    );
};

export default Hero;
