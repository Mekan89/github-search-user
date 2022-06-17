import React from "react";
import { useRecoilValue } from "recoil";
import { menuState } from "../atoms/state";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

const Header: React.FC = () => {
  const toggle = useRecoilValue(menuState);
  return (
    <nav>
      <TopBar />
      {!toggle && <BottomBar />}
    </nav>
  );
};

export default Header;
