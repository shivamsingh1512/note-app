import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/check-auth", {
          withCredentials: true,
        });
        setIsLoggedIn(res.data.authenticated); // Assuming your backend returns { authenticated: true }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, [location]);

  // ✅ Logout handler
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/logout", {}, { withCredentials: true });
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      alert("Logout failed");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-gray-900 shadow-md flex items-center">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img
            className="w-[120px] h-[120px]"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRindbnysDelatbttnsSMCiEuX7Vg1D-Ohg&s"
          />
        </Link>

        <nav className="flex-grow">
          <ul className="flex justify-center space-x-8 text-white text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition duration-300">
                Home
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/login" className="hover:text-yellow-400 transition duration-300">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-yellow-400 transition duration-300">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/notes" className="hover:text-yellow-400 transition duration-300">
                    Notes
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-red-400 transition duration-300"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;