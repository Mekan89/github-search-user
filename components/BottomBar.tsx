import MenuList from "./MenuList";

const BottomBar = () => {
  return (
    <ul className="flex justify-center text-sm mt-7 md:mt-5 md:justify-start lg:justify-items-start">
      <div className="flex items-center gap-6">
        <MenuList title="Explore" />
        <MenuList title="Topics" />
        <MenuList title="Trending" />
        <MenuList title="Collections" />
        <MenuList title="Events" />
        <MenuList title="Github Sponsors" />
      </div>
      <button className="hidden px-3 py-2 ml-auto border border-solid rounded-md md:inline hover:bg-borderCol hover:border-titleCol border-borderCol bg-navCol hover:text-titleCol">
        Get Email Updates
      </button>
    </ul>
  );
};

export default BottomBar;
