import activity1 from "../assets/activity1.jpg";
import activity2 from "../assets/activity2.jpg";
import activity3 from "../assets/activity3.jpg";
import activity4 from "../assets/activity4.jpg";
import activity5 from "../assets/activity5.jpg";
import activity6 from "../assets/activity6.jpg";

const Activities = () => {
  const activities = [
    { id: 1, image: activity1, title: "Coloring Fun" },
    { id: 2, image: activity2, title: "Puzzle Challenges" },
    { id: 3, image: activity3, title: "Story Time" },
    { id: 4, image: activity4, title: "Creative Crafts" },
    { id: 5, image: activity5, title: "Science Experiments" },
    { id: 6, image: activity6, title: "Outdoor Adventures" },
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Activities</h1>
      <p className="text-gray-600 mb-12">Engaging activities designed to enhance learning and foster creativity in every child.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
            <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover" />
            <p className="text-xl font-bold p-4">{activity.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;