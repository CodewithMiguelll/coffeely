import BtnPrimary from "./BtnPrimary";

const BlogCard = ({ blog }) => {
  return (
    <div className="w-60 md:w-70 lg:w-96 border border-[#3e2723] mx-auto transition-all shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center"
        src={blog.image}
        alt={blog.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#040310] open-sans-bold">
          {blog.title}
        </h2>
        <p className="mt-2 text-sm text-[#040310] lato-regular">
          {blog.text}
        </p>
      </div>
      <div className="p-3 border-t border-gray-400 text-right">
        <BtnPrimary label="Read more" />
      </div>
    </div>
  );
};

export default BlogCard;
