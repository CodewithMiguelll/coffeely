import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../firebase/firebase"; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // To handle signup errors
  const navigate = useNavigate(); // To redirect after successful signup

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      
      navigate("/login");
    } catch (error) {
      setError(error.message); // Handle and display any errors that occur during signup
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <div className="transition-all hover:-translate-x-2 absolute top-5 left-6 p-1">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1400"
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center pacifico-regular">
          Sign Up
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              name="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="w-full border p-2 rounded-md bg-[#6d4c41] text-[#fafafa] transition-all active:bg-[#4d3128] hover:translate-y-1 active:translate-y-2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
