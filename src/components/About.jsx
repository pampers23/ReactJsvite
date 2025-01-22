import deliver from '../assets/about1.png';
import quality from '../assets/book2.png';
import service from '../assets/book3.png';
import time from '../assets/time.png';

const About = () => {
  return (
    <section id="about" className="py-16 px-8">
      <h1 className="text-4xl text-center text-blue-900 mb-8">About</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <img src={deliver} alt="Delivery" className="w-32 h-32 mx-auto mb-4" />
          <h3 className="text-lg text-blue-900">Delivery</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fringilla viverra posuere arcu tempor facilisis.
          </p>
          <a href="#" className="text-orange-500">Read more</a>
        </div>
        {/* Repeat for other boxes */}

        <div className="text-center">
          <img src={quality} alt="Delivery" className="w-32 h-32 mx-auto mb-4" />
          <h3 className="text-lg text-blue-900">Quality</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fringilla viverra posuere arcu tempor facilisis.
          </p>
          <a href="#" className="text-orange-500">Read more</a>
        </div>

        <div className="text-center">
          <img src={service} alt="Delivery" className="w-32 h-32 mx-auto mb-4" />
          <h3 className="text-lg text-blue-900">Service</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fringilla viverra posuere arcu tempor facilisis.
          </p>
          <a href="#" className="text-orange-500">Read more</a>
        </div>

        <div className="text-center">
          <img src={time} alt="Delivery" className="w-32 h-32 mx-auto mb-4" />
          <h3 className="text-lg text-blue-900">Time</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fringilla viverra posuere arcu tempor facilisis.
          </p>
          <a href="#" className="text-orange-500">Read more</a>
        </div>
      </div>
    </section>
  );
};

export default About;
