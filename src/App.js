import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Home from './pages/Home'
import LogIn from "./pages/Login";
import Signup from "./pages/SignUp";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from './pages/BlogPost';
import Order from "./pages/OrderPage";
import AOS from "aos";
import "aos/dist/aos.css"; 
import NotFound from './pages/NotFound';


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const blogPosts = [
  {
    id: 1,
    title: "The Art of Brewing the Perfect Coffee",
    date: "August 20, 2024",
    author: "John Doe",
    description:
      "Discover the secrets behind brewing the perfect cup of coffee. From choosing the right beans to mastering brewing techniques, this guide covers it all.",
    content:
      "This is the full content of the blog post about brewing the perfect coffee...",
  },
  {
    id: 2,
    title: "Exploring the World of Specialty Coffee",
    date: "August 15, 2024",
    author: "Jane Smith",
    description:
      "Specialty coffee has taken the world by storm. Learn what makes a coffee 'specialty' and how to taste the difference.",
    content:
      "This is the full content of the blog post about specialty coffee...",
  },
  {
    id: 3,
    title: "Sustainable Coffee Practices",
    date: "August 10, 2024",
    author: "Miguel Oliveira",
    description:
      "How coffee producers are embracing sustainable practices to ensure a better future for our planet and coffee lovers alike.",
    content:
      "This is the full content of the blog post about sustainable coffee practices...",
  },
  {
    id: 4,
    title: "The Health Benefits of Coffee",
    date: "July 28, 2024",
    author: "Alice Green",
    description:
      "Coffee isn't just delicious; it also has a range of health benefits. Find out how your daily cup of coffee can be good for you.",
    content:
      "This is the full content of the blog post about the health benefits of coffee...",
  },
  {
    id: 5,
    title: "Different Brewing Methods Explained",
    date: "July 22, 2024",
    author: "Brian Brown",
    description:
      "Explore the different methods for brewing coffee, from French press to pour-over, and find out which one suits your taste.",
    content:
      "This is the full content of the blog post about different brewing methods...",
  },
  {
    id: 6,
    title: "Coffee Trends to Watch in 2024",
    date: "July 15, 2024",
    author: "Emma White",
    description:
      "From new flavors to innovative brewing techniques, find out what's trending in the coffee world this year.",
    content:
      "This is the full content of the blog post about coffee trends in 2024...",
  },
];

const router = createBrowserRouter ([{
  path: '/',
  element: <Home/>,
  errorElement: <NotFound/>
},

{
  path: '/login',
  element: <LogIn/>
},

{
  path: '/sign-up',
  element: <Signup/>
},

{
  path: '/menu',
  element: <Menu/>
},

{
  path: '/order',
  element: <Order/>
},

{
  path: '/blogs',
  element: <Blogs/>
},

{
  path: '/blogs/:id',
  element: <BlogPost posts={blogPosts}/>
},

{
  path: '/about',
  element: <About/>
}
]);

function App() {
  return (
   <>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
   </> 
    
  );
}

export default App;
