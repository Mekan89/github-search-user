import { GITHUB_LINK } from "../utils/constants";

const BottomBarItem = ({ title }: { title: string }) => {
  return (
    <li className="underline list-none transition duration-200 ease-out underline-offset-8 decoration-2 decoration-bgCol hover:decoration-linkCol">
      <a href={`${GITHUB_LINK}${title.toLowerCase()}`}>{title}</a>
    </li>
  );
};

export default BottomBarItem;
