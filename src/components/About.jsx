import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section id="about" className="py-20 px-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 mb-12">An interactive learning platform designed to make education fun and engaging for kids.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg text-left">
          <i className="fas fa-medal text-3xl text-blue-900 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
          <p className="text-gray-600">Providing high-quality, engaging, and interactive learning experiences for kids.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-left">
          <i className="fas fa-chalkboard-user text-3xl text-blue-900 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Teaching</h3>
          <p className="text-gray-600">Passionate about making learning engaging and helping students discover their full potential.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-left">
          <i className="fas fa-chart-line text-3xl text-blue-900 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Activities</h3>
          <p className="text-gray-600">Engaging activities designed to enhance learning and foster creativity in every child.</p>
        </div>
      </div>
    </section>
  );
};

export default About;