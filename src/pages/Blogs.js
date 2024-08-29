import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Brewing the Perfect Coffee",
    date: "August 20, 2024",
    author: "John Doe",
    description:
      "Discover the secrets behind brewing the perfect cup of coffee. From choosing the right beans to mastering brewing techniques, this guide covers it all.",
    content:
      "This is the full content of the blog post about brewing the perfect coffee...",
  },
  {
    id: 2,
    title: "Exploring the World of Specialty Coffee",
    date: "August 15, 2024",
    author: "Jane Smith",
    description:
      "Specialty coffee has taken the world by storm. Learn what makes a coffee 'specialty' and how to taste the difference.",
    content:
      "This is the full content of the blog post about specialty coffee...",
  },
  {
    id: 3,
    title: "Sustainable Coffee Practices",
    date: "August 10, 2024",
    author: "Miguel Oliveira",
    description:
      "How coffee producers are embracing sustainable practices to ensure a better future for our planet and coffee lovers alike.",
    content:
      "This is the full content of the blog post about sustainable coffee practices...",
  },
  {
    id: 4,
    title: "The Health Benefits of Coffee",
    date: "July 28, 2024",
    author: "Alice Green",
    description:
      "Coffee isn't just delicious; it also has a range of health benefits. Find out how your daily cup of coffee can be good for you.",
    content:
      "This is the full content of the blog post about the health benefits of coffee...",
  },
  {
    id: 5,
    title: "Different Brewing Methods Explained",
    date: "July 22, 2024",
    author: "Brian Brown",
    description:
      "Explore the different methods for brewing coffee, from French press to pour-over, and find out which one suits your taste.",
    content:
      "This is the full content of the blog post about different brewing methods...",
  },
  {
    id: 6,
    title: "Coffee Trends to Watch in 2024",
    date: "July 15, 2024",
    author: "Emma White",
    description:
      "From new flavors to innovative brewing techniques, find out what's trending in the coffee world this year.",
    content:
      "This is the full content of the blog post about coffee trends in 2024...",
  },
];


const Blogs = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl merriweather-bold text-center mb-6">
          Our Coffee Blog
        </h1>
        <p className="text-center text-lg open-sans-regular text-gray-600 mb-8">
          Explore our latest articles, tips, and news about coffee culture,
          brewing methods, and more!
        </p>
        <div data-aos="fade-up"
        data-aos-duration="2000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 open-sans-semi-bold">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {post.date} by {post.author}
                </p>
                <p className="text-gray-700">{post.description}</p>
                <Link
                  to={`/blogs/${post.id}`}
                  className="text-[#3e2723] hover:underline mt-4 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
