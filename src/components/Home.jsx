import blue from "../assets/back-blue.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: `url(${blue})` }}
    >
      <h2 className="text-4xl font-bold mb-4">Bright Minds: Kids Learning Hub</h2>
      <p className="w-1/2 mb-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus non neque culpa unde a porro corrupti assumenda veritatis quasi quae molestiae quisquam eaque minus, ex, laudantium quos qui voluptatibus?
      </p>
      <div className="flex space-x-4">
        <a href="#" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">Learn More</a>
        <a href="#" className="bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition duration-300">Try it out</a>
      </div>
    </section>
  );
};

export default Home;