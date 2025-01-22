import { useState } from 'react';
import { FaBook } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import autumnImage from '../assets/autumn.png';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-8 bg-white shadow-lg">
    <a href="#" className="text-lg font-bold text-blue-900 flex items-center space-x-2">
        <FaBook className="text-orange-500" />
        <span>Book</span>
    </a>


      <nav className="flex space-x-8">
        <a href="#home" className="text-lg text-blue-900">Home</a>
        <a href="#about" className="text-lg text-blue-900">About</a>
        <a href="#books" className="text-lg text-blue-900">Books</a>
        <a href="#categories" className="text-lg text-blue-900">Categories</a>
        <a href="#contacts" className="text-lg text-blue-900">Contacts</a>
      </nav>

      <div className="flex items-center space-x-4">
        <div
          className="p-2 bg-gray-100 text-blue-900 rounded cursor-pointer"
          onClick={() => setSearchActive(!searchActive)}
        >
          <FaSearch />
        </div>
        <div
          className="p-2 bg-gray-100 text-blue-900 rounded cursor-pointer"
          onClick={() => setCartActive(!cartActive)}
        >
          <FaShoppingCart />
        </div>
        <div
          className="p-2 bg-gray-100 text-blue-900 rounded cursor-pointer"
          onClick={() => setLoginActive(!loginActive)}
        >
          <FaUser />
        </div>
      </div>

      {searchActive && (
        <form className="absolute top-16 right-20 w-96 bg-white p-6 shadow-lg rounded">
            <input
            type="search"
            id="search-box"
            placeholder="Search here..."
            className="w-full p-3 border-2 border-blue-500 rounded bg-gray-100 text-sm text-gray-700"
            />
            <label htmlFor="search-box" className="absolute right-8 top-1/2 transform -translate-y-1/2 text-blue-900">
            <FaSearch />
            </label>
        </form>
        )}


    {cartActive && (
    <div className="absolute top-16 right-20 w-96 h-auto bg-white p-8 shadow-lg rounded">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <img src={autumnImage} alt="Autumn" className="w-16 h-16" />
            <div>
            <h3 className="text-blue-900">Autumn</h3>
            <span className="text-gray-500">$4.99</span>
            <span className="text-gray-500">Qty: 1</span>
            </div>
        </div>
        <FaTrash className="fas fa-trash text-gray-500 cursor-pointer" />
        </div>
        {/* Repeat for other items */}
        <div className="mt-4 mb-5 text-lg text-blue-900">Total: $19.69</div>
        <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded">Checkout</a>
    </div>
    )}


      {loginActive && (
        <form className="absolute top-16 right-8 w-72 bg-white p-4 shadow-lg rounded">
          <h3 className="text-xl font-semibold text-blue-900">Login now</h3>
          <input type="email" placeholder="Enter your email" className="w-full p-2 mt-2 border border-gray-300 rounded" />
          <input type="password" placeholder="Enter your password" className="w-full p-2 mt-2 border border-gray-300 rounded" />
          <p className="text-sm text-gray-500">
            Forgot your password? <a href="#">Click here</a>
          </p>
          <p className="text-sm text-gray-500">
            Dont have an account? <a href="/signup" className="text-blue-900">Create now</a>
          </p>
          <button className="btn bg-blue-900 text-white px-4 py-2 rounded mt-4">Login now</button>
        </form>
      )}
    </header>
  );
};

export default Header;
