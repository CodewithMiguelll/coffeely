import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroImg from "../assets/images/coffeeisolated-removebg-preview.png";
import BtnPrimary from '../components/BtnPrimary'
import Marquee from "../components/Marquee";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Main = () => {
  return (
    <div>
      <main className="container">
        {/* HERO SECTION */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-timing-function="ease-out"
          className="grid grid-cols-2 gap-16 mx-auto px-8 items-center"
        >
          <div className="text-center">
            <h1 className="merriweather-bold text-2xl text-[#040310] lg:text-4xl text-center">
              Coffeely
            </h1>
            <p className="text-base text-[#040310] mt-3 mb-3 text-balance lato-regular">
              Your Daily Dose of Coffee Inspiration, From Beans to Cup,
              Experience the journey. <br /> Grab a cup of coffee now!
            </p>
            <BtnPrimary label="Check Out Our Menu" />
          </div>
          <div>
            <img src={HeroImg} alt="Coffee" className="h-auto" width={400} />
          </div>
        </div>

        {/* SERVICES SECTION */}
        <section className="mt-12">
          <h2 className="text-2xl text-[#040310] lg-text-4xl open-sans-semi-bold text-center underline underline-offset-8">
            Our Services
          </h2>
          <Marquee />
        </section>

        {/*ABOUT US SECTION*/}
        <section className="mt-12">
          <h2 className="text-2xl text-[#040310] lg-text-4xl open-sans-semi-bold text-center underline underline-offset-8">
            What Is Coffeely?
          </h2>
        </section>
      </main>
    </div>
  ); 
};

export default Main;
