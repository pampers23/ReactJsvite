import logo from "../assets/logo.png"

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full">
      <img src={logo} alt="Logo" className="w-12 h-12 cursor-pointer" />
      <div className="navigation">
        <ul className="flex space-x-8">
          <li><a href="#home" className="text-blue-600 hover:text-blue-800">Home</a></li>
          <li><a href="#about" className="text-blue-600 hover:text-blue-800">About</a></li>
          <li><a href="#activities" className="text-blue-600 hover:text-blue-800">Activities</a></li>
          <li><a href="#contacts" className="text-blue-600 hover:text-blue-800">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;