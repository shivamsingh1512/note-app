import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-lg text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Note Making App 📝</h1>
        <p className="text-gray-600 text-lg">
          Please login to start creating your notes. <br />
          If you're new, register first to get started.
        </p>

        {/* <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
              Register
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Welcome;
