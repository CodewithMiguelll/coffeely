import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogPost = ({ posts = [] }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>Blog post not found!</p>;
  }

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl open-sans-semi-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {post.date} by {post.author}
      </p>
      <p className="text-gray-700">{post.content}</p>
    </div>
    <Footer/>
    </>
    
  );
};

export default BlogPost;
