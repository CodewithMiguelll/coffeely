import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import LogIn from "./pages/Login";
import Signup from "./pages/SignUp";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
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
  path: '/about',
  element: <About/>
}
]);

function App() {
  return (
   <>
    <RouterProvider router={router} />
   </> 
    
  );
}

export default App;
