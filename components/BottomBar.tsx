import BottomBarItem from "./BottomBarItem";

const BottomBar = () => {
  return (
    <ul className="flex justify-center text-sm mt-7 md:mt-5 md:justify-start lg:justify-items-start">
      <div className="flex items-center gap-6">
        <BottomBarItem title="Explore" />
        <BottomBarItem title="Topics" />
        <BottomBarItem title="Trending" />
        <BottomBarItem title="Collections" />
        <BottomBarItem title="Events" />
        <BottomBarItem title="Github Sponsors" />
      </div>
      <button className="hidden px-3 py-2 ml-auto border border-solid rounded-md md:inline hover:bg-borderCol hover:border-titleCol border-borderCol bg-navCol hover:text-titleCol">
        Get Email Updates
      </button>
    </ul>
  );
};
5;
export default BottomBar;
