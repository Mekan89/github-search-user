import Head from "next/head";
import Header from "./Header";

const Layout = ({ title = "Github Clone", children }: { title?: string; children: JSX.Element }) => {
  // const { pathname } = useRouter();

  return (
    <div className="container px-2 py-2">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Github clone with Nextjs and Tailwind" />
        <link rel="icon" href="/img/github.svg" />
      </Head>

      <Header />

      {/* {pathname === "/" && <Showcase />} */}

      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
