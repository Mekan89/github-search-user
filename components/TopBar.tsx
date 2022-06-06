/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { menuState } from "../atoms/state";
import arrowDown from "../public/img/caret-down-outline.svg";
import githubIcon from "../public/img/github.svg";
import hamburgerIcon from "../public/img/hamburger.svg";
import image from "../public/img/image.jpeg";
import notificationIcon from "../public/img/notificationIcon.svg";
import plusIcon from "../public/img/plus.svg";
import signoutIcon from "../public/img/signout.svg";

const TopBar = () => {
  const menuButton = useRef<HTMLUListElement>(null);
  const [toggle, setToggle] = useRecoilState<boolean>(menuState);

  return (
    <div className="text-pryCol xs:bg-navCol">
      <div className="flex flex-wrap items-center justify-between text-sm font-bold max-w-screen-2xl md:flex-nowrap ">
        <img
          onClick={() => setToggle(!toggle)}
          className="w-6 h-6 cursor-pointer md:hidden hover:text-pryCol"
          src={hamburgerIcon.src}
          alt="menu icon"
        />
        <img className="w-8 h-8 mr-2 cursor-pointer" src={githubIcon.src} alt="menu icon" />
        <ul
          ref={menuButton}
          className={`items-center justify-start order-last w-full mt-4 space-x-3 divide-y md:w-9/12 md:mt-0 md:flex md:divide-none md:order-none ${
            toggle ? "block" : "hidden"
          }`}>
          <li className="md:w-60">
            <input
              className="w-full px-2 py-1 mb-2 border border-solid rounded-md bg-[#1b1d23] border-borderCol md:mb-0 focus:border-0"
              type="text"
              name="search"
              placeholder="Search or jump to"
            />
          </li>
          <li className="nav md:hidden">
            <a href="https://github.com/dashboard">Dashboard</a>
          </li>
          <li className="nav">
            <a href="https://github.com/pulls">
              <span className="hidden md:inline lg:hidden">Pulls</span>
              <span className="md:hidden lg:inline">Pull requests</span>
            </a>
          </li>
          <li className="nav">
            <a href="https://github.com/issues">Issues</a>
          </li>
          <li className="nav">
            <a href="https://github.com/marketplace">Marketplace</a>
          </li>
          <li className="nav">
            <a href="https://github.com/explore">Explore</a>
          </li>
          <li className="nav md:hidden">
            <a href="https://github.com/features/codespaces">Codespaces</a>
          </li>
          <li className="nav md:hidden">
            <a href="https://github.com/sponsors/community">Sponsors</a>
          </li>
          <li className="nav md:hidden">
            <a href="github.com/settings">Settings</a>
          </li>
          <li className="nav md:hidden">
            <a href="https://github.com/ibraheemsulay">
              <img
                className="w-6 h-6 object-cover inline -mt-0.5 mr-2 rounded-full"
                src={image.src}
                alt="contributor"
              />
              ibraheemsulay
            </a>
          </li>
          <li className="nav md:hidden">
            <a href="https://github.com/signout">
              <img className="w-4 h-4 inline -mt-0.5 rounded-full" src={signoutIcon.src} alt="contributor" /> Sign out
            </a>
          </li>
        </ul>
        <div className="">
          <img
            className="inline-block w-4 h-4 mr-0 cursor-pointer md:mr-4 md:ml-auto hover:text-pryCol"
            src={notificationIcon.src}
            alt="menu icon"
          />
          <img
            className="hidden w-3 h-3 cursor-pointer md:inline hover:text-pryCol"
            src={plusIcon.src}
            alt="more options"
          />
          <img
            className="hidden w-4 h-4 ml-1 cursor-pointer md:inline hover:text-pryCol"
            src={arrowDown.src}
            alt="more options"
          />{" "}
        </div>
        <div className="hidden md:inline-block md:ml-4 md1:ml-4 md2:ml-4 lg:ml-4">
          <img className="w-6 h-6 object-cover inline -mt-0.5 rounded-full" src={image.src} alt="user profile" />{" "}
          <img className="inline w-4 h-4 cursor-pointer hover:text-pryCol" src={arrowDown.src} alt="more options" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
