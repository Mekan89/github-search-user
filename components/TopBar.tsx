/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { menuState, searchState } from "../atoms/state";
import arrowDown from "../public/caret-down-outline.svg";
import githubIcon from "../public/github.svg";
import hamburgerIcon from "../public/hamburger.svg";
import notificationIcon from "../public/notificationIcon.svg";
import plusIcon from "../public/plus.svg";
import signoutIcon from "../public/signout.svg";
import TopBarItem from "./TopBarItem";

const TopBar = () => {
  // const [query, setQuery] = useState("");
  const setSearch = useSetRecoilState(searchState);
  // const users = useRecoilValue(fetchUsers);
  const menuButton = useRef<HTMLUListElement>(null);
  const [toggle, setToggle] = useRecoilState<boolean>(menuState);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   debounce(() => setSearch(value), 1000);
  // };

  // console.log(users);

  return (
    <div className="text-pryCol xs:bg-navCol">
      <div className="flex flex-wrap items-center text-sm font-bold max-w-screen-2xl md:flex-nowrap ">
        <img
          onClick={() => setToggle(!toggle)}
          className="w-6 h-6 cursor-pointer md:hidden hover:text-pryCol"
          src={hamburgerIcon.src}
          alt="menu icon"
        />
        <Link href="/">
          <img className="flex-1 w-8 h-8 cursor-pointer md:flex-none md:mr-3" src={githubIcon.src} alt="menu icon" />
        </Link>
        <ul
          ref={menuButton}
          className={`items-center justify-start order-last w-full mt-4 space-x-3 divide-y md:w-9/12 md:mt-0 md:flex md:divide-none md:order-none ${
            toggle ? "block" : "hidden"
          }`}>
          <li className="md:w-60">
            <input
              ref={searchInputRef}
              autoComplete="off"
              className="w-full px-2 py-1 mb-2  rounded-md bg-[#1b1d23] border-none ring-1 font-light ring-borderCol hover:ring-[#316dca] focus:ring-[#316dca]  text-titleCol md:mb-0 focus:outline-none ring-inset"
              type="text"
              name="search"
              onChange={e => setSearch(e.target.value)}
              // onKeyDown={(event) => {
              //   if (event.key === "Enter") {
              //     setUserToFetch(user);
              //     setRepoFilterState("");
              //   }
              // }}
              placeholder="Search or jump to"
            />
          </li>
          <TopBarItem title="Dashboard" hidden />
          <TopBarItem title="Issues" />
          <TopBarItem title="Pulls" />
          <TopBarItem title="Marketplace" />
          <TopBarItem title="Explore" />
          <TopBarItem title="Codespaces" hidden />
          <TopBarItem title="Sponsors" hidden />
          <TopBarItem title="Settings" hidden />
          <TopBarItem title="ibraheemsulay" hidden>
            <img
              className="w-6 h-6 object-cover inline -mt-0.5 mr-2 rounded-full"
              src="https://avatars.githubusercontent.com/u/40357987?v=4"
              alt="contributor"
            />
          </TopBarItem>
          <TopBarItem title="Sign out" hidden>
            <img className="w-4 h-4 inline -mt-0.5 mr-2 rounded-full" src={signoutIcon.src} alt="contributor" />
          </TopBarItem>
        </ul>
        <div className="ml-auto">
          <img
            className="inline-block w-4 h-4 mr-0 cursor-pointer md:mr-4 hover:text-pryCol"
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
          />
        </div>
        <div className="hidden md:inline-block md:ml-4 md1:ml-4 md2:ml-4 lg:ml-4">
          <img
            className="w-6 h-6 object-cover inline -mt-0.5 rounded-full"
            src="https://avatars.githubusercontent.com/u/40357987?v=4"
            alt="user profile"
          />{" "}
          <img className="inline w-4 h-4 cursor-pointer hover:text-pryCol" src={arrowDown.src} alt="more options" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
