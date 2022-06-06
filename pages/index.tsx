import type { NextPage } from "next";
import CustomHead from "../components/CustomHead";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-bgCol text-titleCol ">
      <CustomHead title="Github Search User" />
      <NavBar />
      <main></main>
    </div>
  );
};

export default Home;
