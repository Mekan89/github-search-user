/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import arrowDown from "../public/img/caret-down-outline.svg";
import githubIcon from "../public/img/github.svg";
import hamburgerIcon from "../public/img/hamburger.svg";
import image from "../public/img/image.jpeg";
import notificationIcon from "../public/img/notificationIcon.svg";
import plusIcon from "../public/img/plus.svg";
import signoutIcon from "../public/img/signout.svg";
import List from "./List";

const Navbar: React.FC = () => {
  const menuButton = useRef<HTMLUListElement>(null);
  const [toggle, setToggle] = useState<boolean>(true);

  const showMenu = () => {
    if (menuButton.current !== null) {
      setToggle(!toggle);
      if (toggle) menuButton.current.style.display = "block";
      if (!toggle) menuButton.current.style.display = "none";
    }
  };

  return (
    <nav className="px-2 text-pry">
      <div className="text-pryCol xs:bg-navCol">
        <div className="lg:px-8 mb-2 px-4 py-2 mx-auto max-w-screen-2xl justify-between items-center flex flex-wrap md:flex-nowrap text-sm font-bold">
          <img
            onClick={showMenu}
            className="w-6 h-6 md:hidden hover:text-pryCol cursor-pointer"
            src={hamburgerIcon.src}
            alt="menu icon"
          />
          <img className="w-8 h-8 cursor-pointer mr-2" src={githubIcon.src} alt="menu icon" />
          <ul
            ref={menuButton}
            className="order-last w-full md:w-9/12 mt-4 md:mt-0 divide-y hidden md:flex justify-start items-center md:divide-none md:order-none">
            <li className="w-full py-2 md:w-60">
              <input
                className="w-full min-w-full bg-bgCol border-borderCol border border-solid rounded-md px-2 py-1 mb-2 md:mb-0 focus:border-0"
                type="text"
                name="search"
                placeholder="Search or jump to"
              />
            </li>
            <li className="w-full md:ml-6 border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer md:hidden">
              <a href="https://github.com/dashboard">Dashboard</a>
            </li>
            <li className="w-full md:ml-6  md:w-auto border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/pulls">
                <span className="hidden md:inline lg:hidden">Pulls</span>
                <span className="md:hidden lg:inline">Pull requests</span>
              </a>
            </li>
            <li className="w-full md:ml-6   md:w-auto border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/issues">Issues</a>
            </li>
            <li className="w-full md:ml-6  md:w-auto border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/marketplace">Marketplace</a>
            </li>
            <li className="w-full md:ml-6  md:w-auto border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/explore">Explore</a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/features/codespaces">Codespaces</a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/sponsors/community">Sponsors</a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer ">
              <a href="github.com/settings">Settings</a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/ibraheemsulay">
                {" "}
                <img
                  className="w-6 h-6 object-cover inline -mt-0.5 rounded-full"
                  src={image.src}
                  alt="contributor"
                />{" "}
                ibraheemsulay
              </a>
            </li>
            <li className="w-full  md:hidden border-borderCol py-2 text-titleCol hover:text-pryCol cursor-pointer">
              <a href="https://github.com/signout">
                {" "}
                <img className="w-4 h-4 inline -mt-0.5 rounded-full" src={signoutIcon.src} alt="contributor" /> Sign out
              </a>
            </li>
          </ul>
          <div className="md:hidden inline-block text-right">
            <img
              className="w-4 h-4 md:ml-auto md:-mr-4 md1:-mr-6 md2:-mr-8 lg:-mr-12 xl:-mr-20 2xl:-mr-24 inline-block hover:text-pryCol cursor-pointer"
              src={notificationIcon.src}
              alt="menu icon"
            />
          </div>
          <div className="hidden w-16 md:inline md:ml-auto 1xl:mr-4 2xl:mr-8">
            <img
              className="w-4 h-4 md:ml-auto mr-4 inline-block hover:text-pryCol cursor-pointer"
              src={notificationIcon.src}
              alt="menu icon"
            />
            <img className="w-3 h-3 inline  hover:text-pryCol cursor-pointer" src={plusIcon.src} alt="more options" />
            <img
              className="w-4 h-4 inline ml-1 hover:text-pryCol cursor-pointer"
              src={arrowDown.src}
              alt="more options"
            />{" "}
          </div>
          <div className="hidden md:inline-block md:ml-4 md1:ml-4 md2:ml-4 lg:ml-4">
            <img className="w-6 h-6 object-cover inline -mt-0.5 rounded-full" src={image.src} alt="user profile" />{" "}
            <img className="w-4 h-4 inline hover:text-pryCol cursor-pointer" src={arrowDown.src} alt="more options" />
          </div>
        </div>
      </div>

      <ul className="text-sm pb-0 md:px-4 xl:px-0 flex justify-center md:justify-start lg:justify-items-start text-pryCol">
        <div className="space-x-6 hidden sm:flex">
          <List title="Explore" />
          <li className=" underline underline-offset-8 decoration-2 decoration-bgCol hover:text-titleCol hover:decoration-linkCol ">
            <a href="https://github.com/explore">Explore</a>
          </li>
          <li className="border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/topics">Topics</a>
          </li>
          <li className="border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/trending">Trending</a>
          </li>
          <li className="border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/collections">Collections</a>
          </li>
          <li className=" border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/events">Events</a>
          </li>
          <li className="border-b-2 border-bgCol hover:text-titleCol hover:border-solid hover:border-linkCol">
            <a href="https://github.com/sponsors/community">GitHub Sponsors</a>
          </li>
        </div>
        <button className=" hidden  md:inline py-2 px-3 hover:bg-borderCol hover:border-titleCol border border-solid rounded-md border-borderCol bg-navCol hover:text-titleCol ml-auto">
          Get Email Updates
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
