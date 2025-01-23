const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Bright Minds</h3>
          <p className="text-gray-300">An interactive learning platform designed to make education fun and engaging for kids.</p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#activities" className="text-gray-300 hover:text-white">Activities</a></li>
            <li><a href="#contacts" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 pt-6 border-t border-gray-800">
        <p className="text-gray-300">&copy; 2023 Bright Minds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;