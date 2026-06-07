const reasons = [
  {
    id: 1,
    title: "Focused Study Environment",
    description:
      "Libraries provide a quiet and distraction-free space that helps improve concentration and productivity.",
    image: "/one.jpg",
  },
  {
    id: 2,
    title: "Access to Resources",
    description:
      "A wide range of books, journals, and digital resources are available for academic and personal growth.",
    image: "/two.jpg",
  },
  {
    id: 3,
    title: "Group Collaboration",
    description:
      "Dedicated rooms allow students to collaborate, discuss, and work on projects effectively.",
    image: "/three.jpg",
  },
  {
    id: 4,
    title: "Peaceful Reading Space",
    description:
      "Comfortable and calm reading areas help readers relax and enjoy long reading sessions.",
    image: "/four.jpg",
  },
  {
  id: 5,
  title: "Focused Study Environment",
  description:
    "Libraries provide a quiet and distraction-free space that helps improve concentration and productivity.",
  image: "/five.jpg",
},
{
  id: 6,
  title: "Access to Vast Knowledge",
  description:
    "Libraries offer thousands of books, journals, and digital resources across different subjects for learning and research.",
  image: "/six.jpg",
},
{
  id: 7,
  title: "Free Learning Resources",
  description:
    "Most libraries provide free access to books, computers, and educational materials, making learning affordable for everyone.",
  image: "/seven.jpg",
},
{
  id: 8,
  title: "Peaceful Reading Space",
  description:
    "Comfortable and calm reading areas help readers relax and enjoy long reading sessions.",
  image: "/eight.jpg",
}
];

const ExtraSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Why People Go to the Library
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          A place for learning, focus, and personal growth
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 flex-1">
                {item.description}
              </p>

              <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 self-start">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraSection;