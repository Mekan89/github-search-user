import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ title = "Github Clone", children }: { title?: string; children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Github clone with Nextjs and Tailwind" />
        <link rel="icon" href="/github.svg" />
      </Head>

      <div className="container flex flex-col h-screen p-2 md:px-3 md:pt-3 lg:max-w-5xl">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
