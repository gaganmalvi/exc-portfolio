import { SocialIcon } from "react-social-icons";
import "./App.css";
import Logo from "./../images/logo";
import { Link } from "react-router-dom";
import PreLoader from "./../Preloader/Preloader";

function App() {
  return (
    <><PreLoader />
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="flex-1 w-full flex">
        <div className="flex-1 flex flex-col sm:text-left	text-center sm:justify-end justify-center sm:align-start align-center sm:pl-8 sm:pb-16">
          <img
            src="https://avatars.githubusercontent.com/u/26477157"
            alt="Gagan Malvi"
            className="w-64 rounded-full sm:m-0 mx-auto" />
          <h1 className="text-5xl font-bold text-white mt-8 font-inter-bold">Gagan M. Malvi</h1>
          <div className="text-graybody mt-4 font-inter-bold">
            <p className="text-graybody">
              Founder and Lead at the Styx Project
            </p>
            <p>Student of CSE at Vellore Institute of Technology, Vellore</p>
          </div>
        </div>
        <div className="sm:flex-1">
        </div>
      </div>

      <nav
        style={{ backgroundColor: "rgba(229, 229, 229, 0.33)" }}
        className="flex w-full justify-between px-8 py-4 text-white backdrop-blur-sm"
      >
        <div className="flex-1 hidden sm:flex justify-start items-center">
          <SocialIcon
            url="https://github.com/gaganmalvi"
            bgColor="transparent"
            fgColor="#ffffff" />
          <SocialIcon
            url="https://twitter.com/gmlvi"
            bgColor="transparent"
            fgColor="#ffffff" />
          <SocialIcon
            url="https://linkedin.com/in/gaganmalvi"
            bgColor="transparent"
            fgColor="#ffffff" />
          <SocialIcon
            url="https://medium.com/@malvigagan"
            bgColor="transparent"
            fgColor="#ffffff" />
          <SocialIcon
            network="telegram"
            url="https://t.me/gaganmalvi"
            bgColor="transparent"
            fgColor="#ffffff" />
          <SocialIcon
            url="mailto:malvigagan@gmail.com"
            bgColor="transparent"
            fgColor="#ffffff" />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 hidden sm:flex justify-end items-center font-inter-bold">
          <Link
            className="text-white hover:bg-grayhover px-4 py-1 rounded-full"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-white hover:bg-grayhover rounded-full px-4 py-1"
            to="/projects"
          >
            Projects
          </Link>
        </div>
      </nav>
    </div></>
  );
}

export default App;
