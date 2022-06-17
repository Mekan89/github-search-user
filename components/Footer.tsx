import github from "../public/github.svg";

const Footer = () => {
  return (
    <footer className="mt-8">
      <ul className="flex flex-wrap py-8 border-t border-solid justify-evenly border-borderCol ">
        <div className="flex flex-wrap justify-center w-full mb-3 text-xs lg:justify-items-start lg:w-auto">
          <li className="mx-1 md:mx-4 text-pryCol lg:ml-0">&copy; {new Date().getFullYear()} GitHub, Inc</li>
          <li className="footer">
            <a
              href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
              target="_blank"
              rel="noreferrer">
              Terms
            </a>
          </li>
          <li className="footer ">
            <a
              href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
              target="_blank"
              rel="noreferrer">
              Privacy
            </a>
          </li>
          <li className="footer">
            <a href="https://github.com/security" target="_blank" rel="noreferrer">
              Security
            </a>
          </li>
          <li className="footer">
            <a href="https://www.githubstatus.com/" target="_blank" rel="noreferrer">
              Status
            </a>
          </li>
          <li className="footer lg:mr-0">
            <a href="https://docs.github.com/en" target="_blank" rel="noreferrer">
              Docs
            </a>
          </li>
        </div>
        <li className="hidden lg:inline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-6 h-6" src={github.src} alt="github icon" />
        </li>
        <div className="flex flex-wrap justify-center w-full text-xs lg:w-auto ">
          <li className="footer ">
            <a href="https://support.github.com/?tags=dotcom-footer">Contact GitHub</a>
          </li>
          <li className="footer">
            <a href=" https://github.com/pricing ">Pricing</a>
          </li>
          <li className="footer">
            <a href="https://docs.github.com/en">API</a>
          </li>
          <li className="footer">
            <a href=" https://services.github.com/">Training</a>
          </li>
          <li className="footer">
            <a href=" https://github.blog/">Blog</a>
          </li>
          <li className="footer lg:mr-0">
            <a href="https://github.com/about" target="_blank" rel="noreferrer">
              About
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
