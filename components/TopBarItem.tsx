import { GITHUB_LINK } from "../utils/constants";

interface IProps {
  title: string;
  hidden?: boolean;
  children?: JSX.Element;
}

const TopBarItem = ({ title, hidden = false, children }: IProps) => {
  return (
    <li className={`nav ${hidden && "md:hidden"}`}>
      {children}
      <a href={`${GITHUB_LINK}${title.toLowerCase()}`}>{title}</a>
    </li>
  );
};

export default TopBarItem;
