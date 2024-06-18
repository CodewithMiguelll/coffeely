import MarqueeCard from './MarqueeCard'
import '../styles/Marquee.css'

const services = [
  {
    title: "Subscription Service",
    description: "Get regular deliveries of your favorite coffee.",
  },
  {
    title: "Custom Coffee Blends",
    description: "Create your own coffee blends with our selection of beans.",
  },
  {
    title: "Brewing Equipment Sales",
    description: "Find the best equipment for brewing your perfect cup.",
  },
  {
    title: "Coffee Tasting Events",
    description: "Join us for virtual or in-person coffee tasting events.",
  },
  {
    title: "Coffee Workshops and Classes",
    description: "Learn brewing techniques, latte art, and more.",
  },
  {
    title: "Gift Boxes and Hampers",
    description: "Curated gift boxes for any occasion.",
  },
  {
    title: "Corporate Services",
    description: "Coffee supply and equipment services for offices.",
  },
  {
    title: "Wholesale Supply",
    description: "Bulk purchase options for cafes and restaurants.",
  },
  {
    title: "Coffee Consultancy",
    description: "Expert advice for starting or improving your coffee shop.",
  },
  {
    title: "Coffee Club Membership",
    description: "Exclusive benefits and early access to new products.",
  },
  {
    title: "Coffee Recipe Blog",
    description: "Discover recipes for coffee-based drinks and desserts.",
  },
  {
    title: "Personalized Recommendations",
    description: "Get coffee recommendations based on your preferences.",
  },
  {
    title: "Sustainability Initiatives",
    description: "Products focusing on sustainability and fair trade.",
  },
  {
    title: "Coffee Shop Locator",
    description: "Find the nearest coffee shop location.",
  },
];

const Marquee = () => {
  return (
    <div className='marquee-container'>
      <div className='marquee'>
        {services.map((service, index) => (
          <div className='marquee-item' key={index}>
            <MarqueeCard title={service.title} description={service.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
