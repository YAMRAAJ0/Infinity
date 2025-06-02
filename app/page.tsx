import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <video 
        src="/gettyimages-1180927656-640_adpp.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0  bg-opacity-90 z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white z-20">
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Infinity</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the future of technology</p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
