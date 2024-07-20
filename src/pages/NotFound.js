import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';
const NotFound = () => {
    return (
      <div>
        <Header />
        <div className=" flex flex-col gap-16 items-center justify-center p-[8rem]">
          <p className=" text-3xl md:text-7xl font-semibold pacifico-regular">
            404
          </p>{" "}
          <p className="text-2xl md:text-3xl">Sorry, This Page Doesn't Exist</p>
          <Link to="./">
            <button className="p-2 rounded-xl border border-black transition-all hover:bg-[#6d4c41] hover:text-[#fafafa] hover:-translate-y-1 active:bg-[#4d3128] active:translate-y-1">
              {" "}
              <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Take Me Home
            </button>
          </Link>
        </div>
        <Footer/>
      </div>
    );
}
 
export default NotFound;