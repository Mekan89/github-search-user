const MenuList = ({ title }: { title: string }) => {
  return (
    <li className="underline transition duration-200 ease-out underline-offset-8 decoration-2 decoration-bgCol hover:decoration-linkCol ">
      <a href={`https://github.com/${title.toLowerCase()}`}>{title}</a>
    </li>
  );
};

export default MenuList;
