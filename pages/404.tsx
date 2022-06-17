import Link from "next/link";

const NotFound = () => (
  <div className="container flex flex-col items-center justify-center min-h-screen mx-auto space-y-12 ">
    <div className="space-y-6 text-center">
      <h1 className="text-3xl sm:text-6xl">404 - Page not found</h1>
      <p className="text-xl">We can not find the page you are looking for.</p>
    </div>
    <Link href="/">
      <a className="px-6 py-3 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-700 sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap">
        Go back home{" "}
      </a>
    </Link>
  </div>
);

export default NotFound;
