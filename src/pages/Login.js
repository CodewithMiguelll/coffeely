import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import CoverImg from "../assets/images/jakub-dziubak-XtUd5SiX464-unsplash.jpg";
import GoogleImg from "../assets/images/7123025_logo_google_g_icon.png";
import {
  doSignInWithEmailandPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../../src/contexts/authContext";

const LogIn = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailandPassword(email, password).catch((err) => {
        setIsSigningIn(false);
      });
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false); 
      });
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to="/" replace={true} />}
      <div className="w-full h-screen flex items-center">
        {/* Log In Image */}
        <div className="bg-[#3e2723] hidden lg:flex flex-col relative w-full h-full rounded-e-2xl">
          <div className="absolute top-1/5 left-1/10 flex flex-col">
            <h1 className="text-3xl md:text-4xl text-[#040310] my-4 font-black merriweather">
              Welcome Aboard Coffee Enthusiasts
            </h1>
            <p className="text-lg text-[#040310] font-semibold open-sans">
              Please log in
            </p>
          </div>
          <img
            src={CoverImg}
            alt="Background"
            className="w-full h-full object-cover rounded-e-2xl"
          />
        </div>

        {/* Log In Form */}
        <div className="lg:w-1/2 w-full h-full bg-[#fafafa] flex flex-col p-20 justify-between">
          <h1 className="text-xl text-[#040310] pacifico-regular mb-2">
            Coffeely
          </h1>
          <div className="w-full flex flex-col max-w-lg">
            <div className="w-full flex flex-col mb-4">
              <h3 className="text-xl md:text-2xl text-[#040310] mb-4 open-sans-semi-bold">
                Log In
              </h3>
              <p className="text-sm mb-3">
                Welcome Back! Please Enter Your Details
              </p>
            </div>

            {/* FORM ELEMENTS */}
            <form onSubmit={onSubmit} className="w-full flex flex-col mb-4">
              <input
                className="w-full border-b bg-transparent text-[#040310] focus:outline-none my-2 border-[#a1887f] py-2"
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="w-full border-b bg-transparent text-[#040310] focus:outline-none my-2 border-[#a1887f] py-2"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="w-full flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    className="rounded-md w-4 h-4 mr-2"
                    type="checkbox"
                    name="remember"
                  />
                  <p className="text-sm whitespace-nowrap">Remember Me</p>
                </div>
                <p className="italic whitespace-nowrap">Forgotten Password?</p>
              </div>

              {/* Log In Button */}
              <button
                type="submit"
                disabled={isSigningIn}
                className={`border p-2 rounded-md w-full bg-[#6d4c41] text-[#fafafa] transition-all active:bg-[#4d3128] hover:translate-y-1 active:translate-y-2 ${
                  isSigningIn ? "opacity-50" : ""
                }`}
              >
                {isSigningIn ? "Signing In..." : "Log In"}
              </button>
            </form>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-px bg-black"></div>
              <p className="absolute bg-[#fafafa] px-2 text-lg">OR</p>
            </div>

            <button
              onClick={onGoogleSignIn}
              className="w-full text-[#040310] my-4 open-sans-semi-bold bg-[#fafafa] rounded-md p-4 text-center flex items-center justify-center"
            >
              <img src={GoogleImg} alt="Google Logo" className="w-6 h-6 mr-2" />
              Sign In With Google
            </button>

            <p className="w-full flex items-center justify-center text-sm">
              Don't have an account?
              <Link to="/sign-up">
                <span className="ml-1 font-semibold text-[#a1887f]">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
