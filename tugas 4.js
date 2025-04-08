import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 bg-gradient-to-br from-blue-100 to-white">
      {/* Left side: text */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold text-blue-800">Welcome to Our Service</h1>
        <p className="text-lg text-gray-700">
          We provide the best solutions to grow your business online.
        </p>
        <Link to="/contact">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right side: illustration */}
      <div className="mt-10 md:mt-0">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Illustration"
          className="rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}

export default LandingPage;
