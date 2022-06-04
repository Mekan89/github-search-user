const List = ({ title }) => {
  return (
    <li className=" underline underline-offset-8 decoration-2 decoration-bgCol hover:text-titleCol hover:decoration-linkCol ">
      <a href="https://github.com/explore">{title}</a>
    </li>
  );
};

export default List;
