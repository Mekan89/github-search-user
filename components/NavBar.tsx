import React from "react";
import { useRecoilValue } from "recoil";
import { menuState } from "../atoms/state";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

const Navbar: React.FC = () => {
  const toggle = useRecoilValue(menuState);
  return (
    <nav className="container px-2 pt-4">
      <TopBar />
      {!toggle && <BottomBar />}
    </nav>
  );
};

export default Navbar;
