import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    // [logIn  , setlogIN] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-gray-900 shadow-md flex items-center">
            <div className="container mx-auto flex justify-between items-center px-4">
               
                <Link to="/" className="flex items-center">
                    <img className="w-[120px] h-[120px]" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRindbnysDelatbttnsSMCiEuX7Vg1D-Ohg&s" />
                </Link>
                
                {/* Navigation Links */}
                <nav className="flex-grow">
                    <ul className="flex justify-center space-x-8 text-white text-lg font-medium">
                        <li>
                            <Link 
                                to="/" 
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/login" 
                                className="hover:text-yellow-400 transition duration-300"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to = "/register"
                                className="hover:text-yellow-400 transition duration-300">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
} ;

export default Header ;
