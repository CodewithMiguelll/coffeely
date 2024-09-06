import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClipboard,
  faCoffee,
  faHome,
  faTimes,
  faBook,
  faQuestionCircle,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext"; // Make sure to import useAuth hook

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { currentUser } = useAuth();

  return (
    <header className="p-4">
      <nav className="flex justify-between gap-9 items-center">
        <Link to="/">
          <h1 className="text-2xl pacifico-regular">Coffeely</h1>
        </Link>
        <ul className="hidden lg:flex gap-7 items-center p-3 shadow-md border rounded-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/order">Get Coffee</Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          {!currentUser ? (
            <>
              <Link to="/login">
                <BtnPrimary label="Log In" />
              </Link>
              <Link to="/sign-up">
                <BtnSecondary label="Sign Up" />
              </Link>
            </>
          ) : (
            <Link to="/user">
              <FontAwesomeIcon
                icon={faUserCircle}
                size="2x"
                className="text-gray-600 hover:text-gray-800"
              />
            </Link>
          )}
        </div>

        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        {/* MOBILE MENU */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`bg-[#3e2723] text-[#fafafa] flex flex-col lg:hidden absolute z-10 top-14 right-0 shadow-xl border rounded-xl w-52 h-[22rem] p-4`}
        >
          <ul className="flex flex-col gap-7 items-start p-3">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to="about">
                <FontAwesomeIcon icon={faQuestionCircle} /> About
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                <FontAwesomeIcon icon={faBook} /> Blogs
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <FontAwesomeIcon icon={faClipboard} /> Menu
              </Link>
            </li>
            <li>
              <Link to="/order">
                <FontAwesomeIcon icon={faCoffee} /> Get Coffee
              </Link>
            </li>
          </ul>
          <div className="flex gap-5 mt-5">
            {!currentUser ? (
              <>
                <Link to="/login">
                  <BtnPrimary label="Log In" />
                </Link>
                <Link to="/sign-up">
                  <BtnSecondary label="Sign Up" />
                </Link>
              </>
            ) : (
              <Link to="/user">
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="2x"
                  className="text-[#fafafa]"
                />
              </Link>
            )}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
