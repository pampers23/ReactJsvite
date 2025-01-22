const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-between">
        <div className="footer-section w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-left mx-auto mr-10">
            We provide the best books for you. Learn more about our services and explore our collection.
            </p>
        </div>
        <div className="footer-section w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-sm hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="text-sm hover:text-orange-500">About</a></li>
            <li><a href="#books" className="text-sm hover:text-orange-500">Books</a></li>
            <li><a href="#categories" className="text-sm hover:text-orange-500">Categories</a></li>
            <li><a href="#contacts" className="text-sm hover:text-orange-500">Contacts</a></li>
          </ul>
        </div>
        <div className="footer-section w-full sm:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@bookstore.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom mt-6 text-sm text-center">
        <p>&copy; 2025 Bookstore. All rights reserved.</p>
    </div>

    </footer>
  );
};

export default Footer;
