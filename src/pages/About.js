import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BaristasImg from "../assets/images/pexels-shkrabaanthony-7176007.jpg";
import TeamMember1 from "../assets/images/pexels-olly-3771101.jpg";
import TeamMember2 from "../assets/images/pexels-olly-3770107.jpg";
import TeamMember3 from "../assets/images/pexels-olly-3769021.jpg";
import Associate1 from "../assets/images/pexels-rdne-7490974.jpg";
import Associate2 from "../assets/images/pexels-olly-3799115.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import BtnPrimary from "../components/BtnPrimary";

const responsive = {
  superLargeDesktop: {
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

const About = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-8 items-stretch">
        <div className="p-6 text-[#040310]">
          <h1 className="text-3xl merriweather-bold mb-4">About Coffeely</h1>
          <p>
            Welcome to Coffeely, where we bring you the finest coffee
            experience. Our passion is brewing the perfect cup and sharing our
            love for coffee with you. Explore our range of premium coffee blends
            and learn more about our coffee culture through our blog.
          </p>
        </div>
        <div className="">
          <img
            className="w-full h-auto"
            src={BaristasImg}
            alt="Baristas working in a cafe"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto my-7 items-stretch">
        <div className="bg-[#6d4c41] p-6 text-[#fafafa]">
          <h1 className="text-xl md:text-3xl text-[#fafafa] merriweather-bold mb-4">
            Our Story
          </h1>
          <p className="lato-regular">
            At Coffeely, our journey began with a simple passion for exceptional
            coffee. Founded by a group of coffee enthusiasts, we set out to
            create a space where quality meets comfort. Our story is rooted in
            the love for every aspect of coffee – from the rich, aromatic beans
            to the art of brewing. We take pride in sourcing the finest beans
            from around the world and blending them to perfection. Join us as we
            share our passion and invite you to be a part of our coffee
            adventure.
          </p>
        </div>

        <div className="p-6 bg-[#3e2723] text-[#fafafa]">
          <h1 className="text-xl md:text-3xl merriweather-bold mb-4">
            Our Mission
          </h1>
          <p className="lato-regular">
            Our mission at Coffeely is to deliver the finest coffee experience
            to our community. We are committed to quality, sustainability, and
            creating memorable moments through every cup we serve. By focusing
            on ethically sourced beans, innovative brewing techniques, and a
            welcoming atmosphere, we aim to not only satisfy your coffee
            cravings but also foster a deeper appreciation for the art and
            culture of coffee.
          </p>
        </div>
        <div className="p-6 bg-[#a1887f] text-[#fafafa]">
          <h1 className="text-xl md:text-3xl merriweather-bold mb-4">
            Our Vision
          </h1>
          <p className="lato-regular">
            Our vision is to become a beacon of excellence in the coffee
            industry, known for our dedication to quality and sustainability. We
            strive to inspire a global community of coffee lovers by continually
            evolving and setting new standards in coffee experiences. Through
            our commitment to innovation and education, we aim to cultivate a
            world where coffee is not just a beverage, but a journey of
            discovery and enjoyment.
          </p>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-xl md:text-3xl merriweather-bold mb-4 text-center">
          Teams and Associates
        </h1>
        <p className="text-center mb-4 lato-regular">
          Meet the passionate team behind Coffeely.
        </p>
        <Carousel responsive={responsive}>
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            className="p-4 text-center"
          >
            <img
              className="w-full h-72 object-cover rounded-lg mx-auto mb-2"
              src={TeamMember1}
              alt="Team Member 1"
              loading="lazy"
            />
            <h2 className="text-lg open-sans-semi-bold">Jane Doe</h2>
            <p>Coffee Roaster</p>
            <p className="mt-2 lato-regular">
              "Bringing out the best flavors from every bean."
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="p-4 text-center"
          >
            <img
              className="w-full h-72 object-cover rounded-lg mx-auto mb-2"
              src={TeamMember2}
              alt="Team Member 2"
              loading="lazy"
            />
            <h2 className="text-lg open-sans-semi-bold">John Smith</h2>
            <p>Barista</p>
            <p className="mt-2 lato-regular">
              "Crafting the perfect cup, one pour at a time."
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="p-4 text-center"
          >
            <img
              className="w-full h-72 object-cover rounded-lg mx-auto mb-2"
              src={TeamMember3}
              alt="Team Member 3"
              loading="lazy"
            />
            <h2 className="text-lg open-sans-semi-bold">Emily Johnson</h2>
            <p>Blog Manager</p>
            <p className="mt-2 lato-regular">
              "Sharing the latest coffee culture trends and insights with our
              community."
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="p-4 text-center"
          >
            <img
              className="w-full h-72 object-cover rounded-lg mx-auto mb-2"
              src={Associate1}
              alt="Associate 1"
              loading="lazy"
            />
            <h2 className="text-lg open-sans-semi-bold">Sarah Lee</h2>
            <p>Coffee Bean Importer</p>
            <p className="mt-2 lato-regular">
              "Providing us with the finest beans from around the world."
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1700"
            className="p-4 text-center"
          >
            <img
              className="w-full h-72 object-cover rounded-lg mx-auto mb-2"
              src={Associate2}
              alt="Associate 2"
              loading="lazy"
            />
            <h2 className="text-lg open-sans-semi-bold">Michael Brown</h2>
            <p>Branding Specialist</p>
            <p className="mt-2 lato-regular">
              "Making Coffeely not just a name, but an experience."
            </p>
          </div>
        </Carousel>
      </div>
      <div className="p-6">
        <h1 className="text-xl md:text-3xl merriweather-bold mb-4 text-center">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start justify-center">
          <div className="w-full md:w-1/2 p-4 text-[#040310]">
            <h2 className="text-lg md:text-xl open-sans-semi-bold mb-2">
              Call Us
            </h2>
            <p className="lato-regular">
              <FontAwesomeIcon icon={faPhone} /> (123) 456-7890
            </p>
            <p className="lato-regular">
              <FontAwesomeIcon icon={faEnvelope} /> contact@coffeely.com
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 text-[#040310]">
            <h2 className="text-lg md:text-xl open-sans-semi-bold mb-2 text-center">
              Subscribe to Our Blog
            </h2>
            <form className="flex flex-col max-w-xs mx-auto w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 mb-4 rounded border border-gray-300 w-full"
                required
              />
              <BtnPrimary label={"Subscribe"} />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
