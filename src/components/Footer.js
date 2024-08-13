import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCoffee,
  faBlog,
  faQuestionCircle,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3e2723] text-[#fafafa] p-6 w-full">
      <div className="flex flex-col items-center">
        <div className="flex gap-6 mb-10">
          <Link
            to="/"
            className="transition-all hover:border-b-2 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link
            to="/about"
            className="transition-all hover:border-b-2 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faQuestionCircle} /> About
          </Link>
          <Link
            to="/blogs"
            className="transition-all hover:border-b-2 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faBlog} /> Blog
          </Link>
          <Link
            to="/menu"
            className="transition-all hover:border-b-2 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faClipboardList} /> Menu
          </Link>
          <Link
            to="/order"
            className="transition-all hover:border-b-2 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faCoffee} /> Order Coffee
          </Link>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/chikaima-uwakwe/"
            target="blank"
            className="transition-all text-xl hover:-translate-y-1 active:translate-y-1"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.github.com/CodeWithMiguelll"
            target="blank"
            className="transition-all text-xl hover:-translate-y-1 active:translate-y-1"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/developedby.miguel"
            target="blank"
            className="transition-all text-xl hover:-translate-y-1 active:translate-y-1"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="mt-4 italic">
          &copy; 2024 Coffeely. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
