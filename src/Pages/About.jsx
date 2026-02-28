import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">

      <h1 className="text-2xl font-semibold text-gray-600 mt-10 mb-6">
        About Page
      </h1>

      <div className="w-full max-w-3xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,120,255,0.15)] overflow-hidden">

        <Navbar />

        <div className="p-10">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-4">About This App</h2>
            <p className="text-gray-700">
              This is a simple weather application that provides current weather updates for cities around the world.
            </p>
            <p className="mt-3 italic text-gray-600">
              Enter a city name to get the latest weather conditions.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default About;