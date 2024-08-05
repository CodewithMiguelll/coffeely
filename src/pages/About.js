import Header from "../components/Header";
import Footer from "../components/Footer";
import BaristasImg from "../assets/images/pexels-shkrabaanthony-7176007.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-8 items-stretch">
        <div className="p-6 bg-[#6d4c41] text-[#fafafa]">
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
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto my-7 items-stretch">
        <div className=" bg-[#6d4c41] p-6 text-[#fafafa]">
          <h1 className="text-xl md:text-3xl text-[#fafafa] merriweather-bold mb-4">
            Our Story
          </h1>
          <p>
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

          <p>
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

          <p>
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

      <Footer />
    </div>
  );
};

export default About;
