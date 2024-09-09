import { useState, useEffect } from "react";
import { useAuth } from "../contexts/authContext"; 
import { useCart } from "react-use-cart";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; 
import {
  faDoorOpen,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserProfile = () => {
  const { currentUser, userLoggedIn } = useAuth();
  const { items } = useCart();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Sign-out Error:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="p-4 shadow-md rounded-md">
        <h2 className="text-2xl merriweather-bold text-center mb-4">Your Profile</h2>

        {userLoggedIn && user ? (
          <div className="mb-8">
            <p className="text-lg lato-bold">
              Name: {user.displayName || "N/A"}
            </p>
            <p className="md:text-lg text-md ">Email: {user.email || "N/A"}</p>
          </div>
        ) : (
          <p className="text-lg">Loading user information...</p>
        )}

        <h3 className="text-xl open-sans-semi-bold text-center mb-4">Your Cart</h3>
        {items.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover mb-2"
                />
                <p className="font-semibold">{item.title}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}

        <div className="mt-4 flex gap-4">
          <button
            onClick={handleSignOut}
            className="px-4 py-2 transition-all bg-red-500 text-[#fafafa] rounded-md hover:bg-red-600 active:bg-red-700"
          >
            <FontAwesomeIcon icon={faDoorOpen} className="mr-2" />
            Sign Out
          </button>
          <Link to="/order">
            <button className="px-4 py-2 bg-[#a1887f] transition-all text-[#fafafa] rounded-md hover:bg-[#7e655c]">
              <FontAwesomeIcon icon={faCartArrowDown} className="mr-2" />
              View Orders
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
