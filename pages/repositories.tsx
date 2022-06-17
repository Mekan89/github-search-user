/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import arrowDown from "../public/img/caret-down-outline.svg";

const Repositories = () => {
  const { pathname } = useRouter();

  return (
    <Layout title="User Repos">
      <section className="justify-between p-4 -mx-1 -mt-1 border border-solid rounded-md rounded-b-none border-borderCol xs:bg-navCol text-pryCol md:flex">
        <div className="inline-block overflow-hidden border border-solid rounded-md border-borderCol text-titleCol">
          <button
            className={`capitalize m-0 py-1 px-2 h-full md:py-0.5 ${
              pathname === "/repositories" ? "bg-[#316dca]" : ""
            }`}>
            <Link href="/repositories">repositories</Link>
          </button>
          <button
            className={`capitalize m-0 py-1 px-2 h-full md:0.5 ${pathname === "/developers" ? "bg-[#316dca]" : ""}`}>
            <Link href="/developers">developers</Link>
          </button>
        </div>
        <div className="flex flex-col flex-wrap mt-4 text-sm md:mt-0 md:justify-between xs:flex-row">
          <p className="m-2 mb-0 cursor-pointer hover:text-titleCol">
            Spoken language:{" "}
            <span>
              Any <img className="inline w-3 h-3" src={arrowDown.src} alt="arrow down" />
            </span>
          </p>
          <p className="m-2 mb-0 cursor-pointer hover:text-titleCol">
            Language:{" "}
            <span>
              Any <img className="inline w-3 h-3" src={arrowDown.src} alt="arrow down" />
            </span>
          </p>
          <p className="m-2 mb-0 cursor-pointer hover:text-titleCol">
            Date range:{" "}
            <span>
              Any <img className="inline w-3 h-3" src={arrowDown.src} alt="arrow down" />
            </span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Repositories;
