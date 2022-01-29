import React from "react";
import { SocialIcon } from "react-social-icons";
import Logo from "../images/logo";
import { Link } from "react-router-dom";
import gagan from "./../../assets/avatar/gagan.png"

export default function About() {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex-1 w-full flex">
            <div className="flex-1">
                <p className="py-16 font-inter-bold text-white font-bold sm:text-6xl text-2xl text-center">
                    Hi. I'm Gagan.
                </p>
                <div style={{ backgroundColor: "rgba(229, 229, 229, 0.33)" }} className="mx-16 rounded-md backdrop-blur-sm sm:px-6 px-4 sm:py-12 py-4 font-inter-bold text-white text-center">
                  <div className="flex justify-center object-scale-down h-48 mb-4">
                    <img alt="Gagan Malvi" src={gagan}/>
                  </div>
                  <p className="sm:mt-12">You might know me as the guy who fiddled with computers back in 6th grade, or the guy who did Linux for fun, installing it on a bunch of computers mostly to our teacher’s annoyance - I just loved playing around with computers and operating systems, breaking and then fixing stuff back - and ultimately being in charge of handling computer systems at my school.</p>
                  <p className="sm:mt-3 mt-2">I love playing around with new and niche technologies, like mobile phones, tablets, developer boards, mostly working on Android Open Source Project builds for random Android devices based off MediaTek and Qualcomm chipsets - from Android 4.4 till now.</p>
                  <p className="sm:mt-3 mt-2">I am currently pursuing my undergraduate in Computer Science and Engineering, from Vellore Institute of Technology, Vellore, India. </p>
                </div>
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
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://twitter.com/gmlvi"
              bgColor="transparent"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://linkedin.com/in/gaganmalvi"
              bgColor="transparent"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="https://medium.com/@malvigagan"
              bgColor="transparent"
              fgColor="#ffffff"
            />
            <SocialIcon
              network="telegram"
              url="https://t.me/gaganmalvi"
              bgColor="transparent"
              fgColor="#ffffff"
            />
            <SocialIcon
              url="mailto:malvigagan@gmail.com"
              bgColor="transparent"
              fgColor="#ffffff"
            />
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
      </div>
    );
}