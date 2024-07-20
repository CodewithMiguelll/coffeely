import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroImg from "../assets/images/coffeeisolated-removebg-preview.png";
import AboutImg from "../assets/images/wade-austin-ellis-4YApsoSaNKA-unsplash.jpg";
import BtnPrimary from '../components/BtnPrimary'
import Marquee from "../components/Marquee";
import BlogCard from "../components/BlogCard";
import Footer from '../components/Footer'
import Header from "../components/Header";
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
      <Header/>
      <main>
        {/* HERO SECTION */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-timing-function="ease-out"
          className="grid grid-cols-2 gap-16 mx-auto px-8 mt-7 items-center"
        >
          <div className="text-center">
            <h1 className="merriweather-bold text-2xl text-[#040310] lg:text-4xl text-center">
              Coffeely
            </h1>
            <p className="text-base text-[#040310] mt-3 mb-3 text-balance lato-regular">
              Your Daily Dose of Coffee Inspiration, From Beans to Cup,
              Experience the journey. <br /> Grab a cup of coffee now!
            </p>
            <BtnPrimary label="Check Out Our Menu!" />
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

        {/*ABOUT COFFEELY*/}
        <section className="mt-12 p-8 text-center">
          <h2 className="text-2xl text-[#040310] lg-text-4xl open-sans-semi-bold text-center underline underline-offset-8">
            What Is Coffeely?
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-6">
            <div className="max-w-lg mx-20 md:mx-0 md:mr-8 mb-4 md:mb-0">
              <p className="text-base text-[#040310] mt-3 mb-3 text-balance lato-regular">
                At Coffeely, we source the finest beans from sustainable farms
                around the world, ensuring every cup is rich, flavorful, and
                ethically produced. Our expert roasting process brings out the
                unique flavors of each bean, creating a perfect cup every time.
              </p>

              <p className="text-base text-[#040310] mt-3 mb-3 text-balance lato-regular">
                We are committed to sustainability, using eco-friendly packaging
                and supporting fair trade practices to ensure our coffee makes a
                positive impact. Whether you’re enjoying a cup at our café or
                brewing our beans at home, Coffeely offers a unique coffee
                experience that delights the senses and warms the heart.
              </p>

              <p className="text-base text-[#040310] mt-3 mb-3 text-balance lato-regular">
                Join us for community events and initiatives that bring coffee
                lovers together.
              </p>

              <p className="text-base text-[#040310] mt-3 mb-3 text-balance lato-regular">
                <span className="font-semibold">
                  Discover the Coffeely experience
                </span>{" "}
                <BtnPrimary
                  label="visit our café or shop online
            today!"
                />
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              className="max-w-md mx-auto"
            >
              <img
                src={AboutImg}
                alt="Barista Making Coffee"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section className="mt-12 p-8 text-center">
          <h2 className="text-2xl text-[#040310] lg-text-4xl open-sans-semi-bold text-center underline underline-offset-8">
            Our Blogs
          </h2>
          <Carousel className="mt-10" responsive={responsive}>
            <div>
              <BlogCard
                blog={{
                  image: AboutImg,
                  title: "Blog Title 1",
                  text: "Lorem Ipsum dolor it amet",
                }}
              />
            </div>

            <div>
              <BlogCard
                blog={{
                  image: AboutImg,
                  title: "Blog Title 2",
                  text: "Lorem Ipsum dolor it amet",
                }}
              />
            </div>

            <div>
              <BlogCard
                blog={{
                  image: AboutImg,
                  title: "Blog Title 3",
                  text: "Lorem Ipsum dolor it amet",
                }}
              />
            </div>

            <div>
              <BlogCard
                blog={{
                  image: AboutImg,
                  title: "Blog Title 4",
                  text: "Lorem Ipsum dolor it amet",
                }}
              />
            </div>

            <div>
              <BlogCard
                blog={{
                  image: AboutImg,
                  title: "Blog Title 5",
                  text: "Lorem Ipsum dolor it amet",
                }}
              />
            </div>

            <div>
              <BlogCard
                blog={{
                  image: AboutImg,
                  title: "Blog Title 6",
                  text: "Lorem Ipsum dolor it amet",
                }}
              />
            </div>
          </Carousel>
        </section>

        {/* FOOTER SECTION*/ }

      <section className="mt-12">
        <Footer/>
      </section>
      </main>
    </div>
  ); 
};

export default Main;
