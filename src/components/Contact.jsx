const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Log form data to the console
    console.log("Form Data:", data);

    // Show an alert
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <section id="contacts" className="py-20 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-12">Have questions or want to learn more? Reach out to us!</p>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg flex-1">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mb-4 border rounded-lg"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="bg-white p-8 rounded-lg shadow-lg flex-1 text-left">
          <div className="flex items-center mb-6">
            <i className="fas fa-map-marker-alt text-2xl text-blue-900 mr-4"></i>
            <p>123 Learning Street, Kids City, KC 12345</p>
          </div>
          <div className="flex items-center mb-6">
            <i className="fas fa-phone-alt text-2xl text-blue-900 mr-4"></i>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center">
            <i className="fas fa-envelope text-2xl text-blue-900 mr-4"></i>
            <p>info@brightminds.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;