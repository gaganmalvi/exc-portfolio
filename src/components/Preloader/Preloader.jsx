import React, {useRef, useEffect} from "react";
import gsap from "gsap";
import MalviLogo from "./../../assets/avatar/gmlvi.svg"

import "./Preloader.css";

const PreLoader = () => {
    const preLoaderScreen = useRef(null);
    const logo = useRef(null);
    const blackbg = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline();
      tl.to(preLoaderScreen.current, {
        duration: 1,
        delay: 1,
        y: "100%",
      })
        .to(preLoaderScreen.current, {
          duration: 2,
          y: "-100%",
        })
        .to(logo.current, {
          duration: 1,
          opacity: 0,
          delay: -0.5,
        })
        .to(blackbg.current, {
          duration: 1,
          opacity: 0,
          delay: -0.5,
        })
        .to(preLoaderScreen.current, {
          delay: -0.5,
          display: "none",
        })
        .to(logo.current, {
          delay: -0.5,
          display: "none",
        })
        .to(blackbg.current, {
          delay: -0.5,
          display: "none",
        });
    }, []);
  
    return (
      <>
        <div
          ref={blackbg}
          style={{ background: "#101010", zIndex: 80 }}
          className=" fixed top-0 left-0 w-screen h-screen"
        />
        <div
          style={{ zIndex: 100 }}
          ref={logo}
          className="flex justify-center items-center inset-0 fixed top-0 left-0 w-screen h-screen"
        >
          <img
            className="xxs:w-56 xs:w-56"
            src={MalviLogo}
            alt="preloader"
          />
        </div>
        <div
          ref={preLoaderScreen}
          className="main-container z-50 fixed w-screen h-screen top-0"
        />
      </>
    );
  };

  export default PreLoader;