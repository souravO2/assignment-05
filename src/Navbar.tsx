import { useState } from "react";
import Logo from "./assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [btn, setBtn] = useState("home");

  const linkBtnHandler = (
    c: "home" | "technologies" | "projects" | "about" | "contact",
  ) => {
    setBtn(c);
  };

  return (
    <nav className="flex sticky top-0 bg-white z-50 justify-between items-center p-4 lg:container mx-auto">
      <button className="btn block sm:hidden p-1 bg-transparent border-none">
        <RxHamburgerMenu className="w-7 h-7" />
      </button>
      <div className="hover:cursor-pointer">
        <img src={Logo} alt="DevStack"></img>
      </div>
      <div>
        <ul className="hidden sm:flex gap-4">
          <li>
            <a
              href="#home"
              onClick={() => linkBtnHandler("home")}
              className={`${btn === "home" ? "text-[#d91b7e]" : "hover:text-[#d91b7e]"}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              onClick={() => linkBtnHandler("technologies")}
              className={`${btn === "technologies" ? "text-[#d91b7e]" : "hover:text-[#d91b7e]"}`}
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => linkBtnHandler("projects")}
              className={`${btn === "projects" ? "text-[#d91b7e]" : "hover:text-[#d91b7e]"}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => linkBtnHandler("about")}
              className={`${btn === "about" ? "text-[#d91b7e]" : "hover:text-[#d91b7e]"}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => linkBtnHandler("contact")}
              className={`${btn === "contact" ? "text-[#d91b7e]" : "hover:text-[#d91b7e]"}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-1 sm:gap-2">
        <button
          className={`btn rounded-full bg-transparent border-none hover:bg-[#d91b7e] text-xs sm:text-sm px-2 sm:px-4 hover:text-white`}
        >
          Sign In
        </button>
        <button
          className={`btn btn-success rounded-full bg-[#d91b7e] border-none shadow-none text-xs sm:text-sm px-2 sm:px-4 text-white`}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
