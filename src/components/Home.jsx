import autumnImage from '../assets/autumn.png';

const Home = () => {
  return (
    <section id="home" className="flex items-center justify-center p-16 space-x-12">
      <div className="text-left max-w-lg">
        <span className="text-orange-500">Our books</span>
        <h3 className="text-4xl font-semibold text-blue-900 mb-3">Business</h3>
        <p className="text-gray-700 mb-6">
          Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.
        </p>
        <a href="#" className="bg-orange-500 text-white px-10 py-3 rounded mt-4 inline-block">
          Order now
        </a>
      </div>
      <div className="w-1000 h-1000 mt-10">
        <img src={autumnImage} alt="Autumn" className="w-full h-full object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default Home;
