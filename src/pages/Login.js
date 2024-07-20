import { Link } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary'
import BtSecondary from '../components/BtnSecondary'
import CoverImg from '../assets/images/jakub-dziubak-XtUd5SiX464-unsplash.jpg'
import BtnSecondary from '../components/BtnSecondary';

const LogIn = () => {
    return (
      <div className="w-full h-screen flex items-center">
        {/* Log In Image */}
        <div className="bg-[#3e2723] relative w-full h-full flex flex-col rounded-e-2xl">
          <div className="absolute top-[20%] left-[10%] flex flex-col">
            <h1 className="md:text-3xl text-[#040310] my-4 merriweather-black">
              Welcome Aboard Coffee Enthusiasts
            </h1>
            <p className="text-lg open-sans-semi-bold text-[#040310]">
              Please log in
            </p>
          </div>

          <img
            src={CoverImg}
            alt="Background"
            className="w-full h-full object-cover hidden md:block rounded-e-2xl"
          />
        </div>

        <div className="w-1/2 h-full bg-[#fafafa] flex flex-col p-20 justify-between">
          <h1 className="text-xl text-[#040310] pacifico-regular">Coffeely</h1>
          <div className="w-full flex flex-col max-w-[550px]">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-[#040310] open-sans-semi-bold text-xl md:text-2xl mb-4">
                Log In
              </h3>
              <p className="text-sm mb-2">
                Welcome Back! Please Enter Your Details
              </p>
            </div>
            <div className="w-full flex flex-col">
              <input
                className="w-full border-b bg-transparent text-[#040310] focus:outline-none my-2 border-[#a1887f] py-2 mb-4"
                type="email"
                name="email"
                id=""
                placeholder="johndoe@gmail.com"
                required
              />

              <input
                className="w-full border-b bg-transparent text-[#040310] focus:outline-none my-2 border-[#a1887f] py-2 mb-4"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
              />
            </div>

            <div className="w-full flex items-center justify-between mb-3">
              <div className="w-full flex items-center">
                <input
                  className="rounded-md w-4 h-4 mr-2"
                  type="checkbox"
                  name="remember"
                  id=""
                />
                <p className="text-sm">Remember Me</p>
              </div>
              <p className="italic whitespace-nowrap">Forgotten Password?</p>
            </div>

            <div className="w-full flex flex-col">
              <BtnPrimary label="Log In" />
              <BtnSecondary label="Sign Up" />
            </div>

            <div className="w-full flex items-center justify-center relative py-2 mt-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="absolute bg-[#fafafa] text-lg">OR</p>
            </div>
            <div className="w-full text-[#040310] my-2 open-sans-semi-bold bg-[#fafafa] rounded-md p-4 text-center flex items-center justify-center">
              
              Sign In With Google
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p>
              Don't have an account?{" "}
              <Link
                className="text-[#a1887f] underline underline-offset-2 font-semibold"
                to="/signup"
              >
                Sign Up Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    );

        
}
 
export default LogIn;