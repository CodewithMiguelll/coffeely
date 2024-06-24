import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClipboard, faCoffee, faHome, faTimes, faBook, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import BtnPrimary from './BtnPrimary'
import BtnSecondary from './BtnSecondary'
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
      <header className="p-4">
        <nav className="flex justify-between gap-9 items-center">
          <h1 className="text-2xl pacifico-regular">Coffeely</h1>
          <ul className="hidden lg:flex gap-7 items-center p-3 shadow-md border rounded-3xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Get Coffee</a>
            </li>
          </ul>
          <div className="hidden lg:flex items-center gap-5">
            <BtnPrimary label ="Log In"/>
            <BtnSecondary label="Sign Up"/>
          </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          {isOpen && (
            <div className="bg-[#3e2723] text-[#fafafa] flex flex-col lg:hidden absolute z-10 top-14 right-1 shadow-xl border rounded-xl w-52 h-[22rem] p-4">
              <ul className="flex flex-col gap-7 items-start p-13">
                <li>
                  <FontAwesomeIcon icon={faHome} /> <a href="/">Home</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faQuestionCircle} />{" "}
                  <a href="/">About</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBook} /> <a href="/">Blogs</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClipboard} />{" "} 
                  <a href="/">Menu</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoffee} />{" "}
                  <a href="/">Get Coffee</a>
                </li>
              </ul>
              <div className="flex gap-5 mt-5">
                <BtnPrimary label ="Log In"/>
               <BtnSecondary label="Sign Up"/>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
}
 
export default Header;