import React from "react";
import { SocialIcon } from "react-social-icons";
import Logo from "../images/logo";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
              <p className="flex flex-1 flex-col text-2xl justify-center font-inter-bold text-white font-bold text-center">
                    Projects and statistics
              </p>
            <div className="flex flex-1">
              <div className="flex flex-1 sm:mx-16 mx-4 sm:px-6 px-4">
                <div className="flex flex-1 h-full w-full justify-center items-center text-center">
                  <div className="sm:py-8 py-32 h-full flex flex-1 gap-2 justify-center">
                    <div className="flex flex-1 flex-col gap-2 items-center">
                      <a href="https://github.com/gaganmalvi">
                        <img 
                          alt="Project"
                          width="350"
                          src="https://github-readme-stats.vercel.app/api?username=gaganmalvi&show_icons=true&theme=marko"
                        />
                      </a>                      
                      <a href="https://github.com/StyxProject/manifest">
                        <img 
                          alt="Project"
                          width="350"
                          src="https://github-readme-stats.vercel.app/api/pin/?username=StyxProject&repo=manifest&show_owner=true" 
                        />
                      </a>
                      <a href="https://github.com/ArcadiaLinux/Arcadia">
                        <img 
                          alt="Project"
                          width="350"
                          src="https://github-readme-stats.vercel.app/api/pin/?username=ArcadiaLinux&repo=Arcadia&show_owner=true" 
                        />                          
                      </a>
                      <a href="https://github.com/CartelProject/vitable">
                        <img 
                          alt="Project"
                          width="350"
                          src="https://github-readme-stats.vercel.app/api/pin/?username=CartelProject&repo=vitable&show_owner=true" 
                        />
                      </a>
                      <a href="https://github.com/ACM-VIT/GitPositive">                          
                        <img 
                          width="350"
                          alt="Project"
                          src="https://github-readme-stats.vercel.app/api/pin/?username=ACM-VIT&repo=GitPositive&show_owner=true" 
                        /> 
                      </a>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 items-center">
                      <a href="https://github.com/gaganmalvi">
                        <img 
                          src="https://github-readme-stats.vercel.app/api/top-langs/?username=gaganmalvi"
                          width="350"
                          alt="Project"
                        />
                      </a>
                      <a href="https://github.com/CartelProject/vitable-backend">
                        <img
                          width="350"
                          alt="Project"
                          src="https://github-readme-stats.vercel.app/api/pin/?username=CartelProject&repo=vitable-backend&show_owner=true" 
                        />                  
                      </a>     
                      <a href="https://github.com/CartelProject/csak">   
                        <img
                          width="350" 
                          alt="Project"
                          src="https://github-readme-stats.vercel.app/api/pin/?username=CartelProject&repo=csak&show_owner=true" 
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white font-inter-bold py-4 px-4 text-center">
              Projects that are undocumented or not present here are on my GitHub or on relevant organizations.
              <br/>
              Furthermore, you can email me at <a href="mailto:malvigagan@gmail.com">malvigagan@gmail.com</a> for issues.
            </p>
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