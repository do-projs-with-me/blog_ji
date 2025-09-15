import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate=useNavigate();
    return (
      <div className="relative h-screen w-full overflow-hidden">
  
  <video
    autoPlay
    // loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-0"
    src="/book.mp4"
  >
    Your browser does not support the video tag.
  </video>

  
  <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
    <div className="bg-white bg-opacity-20 backdrop-blur-md p-10 md:p-16 rounded-xl shadow-xl text-center max-w-2xl border border-white/20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
        🌿 Welcome to Blog Ji!
      </h1>
      <p className="text-lg md:text-xl italic text-white mb-8">
        “Blogging is not just about sharing ideas — it's about making your words matter and impacting lives.”
      </p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-lg"
        onClick={() => navigate('/signUp')}
      >
        ✍️ Start Writing Your Blog
      </button>
    </div>
  </div>
</div>


    );
};

export default Hero;
