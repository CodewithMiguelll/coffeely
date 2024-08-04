import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main data-aos="fade-up"
      data-aos-duration="1400"
      data-aos-timing-function="ease-out" className="flex-grow flex flex-col gap-4 items-center justify-center p-32">
        <h1 className="text-3xl md:text-7xl font-semibold pacifico-regular">
          404
        </h1>
        <p className="text-2xl md:text-3xl">Sorry, This Page Doesn't Exist</p>
        <Link to="/">
          <button className="p-2 rounded-xl border border-black transition-all hover:bg-[#6d4c41] hover:text-[#fafafa] hover:-translate-y-1 active:bg-[#4d3128] active:translate-y-1">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Take Me Home
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
