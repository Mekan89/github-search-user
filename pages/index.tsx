import { SearchIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Layout from "../components/Layout";
import UserCard from "../components/UserCard";
import { IUserProps } from "../ts-types/types";
import { useDebounce } from "../utils/useDebounce";

export const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home: NextPage = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const debounce = useDebounce(query, 1000);
  const url = `https://api.github.com/search/users?q=${debounce}&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET}`;

  const { data: users } = useSWR(url, fetcher);

  if (!users) <h1>Loading...</h1>;

  return (
    <Layout title={"Github Clone"}>
      <h1 className="mt-10 text-2xl font-bold text-center md:text-left text-titleCol">
        {debounce ? `Search results for: ${debounce}` : "Search for Github Users"}
      </h1>
      <div className="flex items-center bg-[#1b1d23] max-w-[30rem]  overflow-hidden rounded-md border border-borderCol text-titleCol my-5 mx-auto md:mx-0  focus-within:border-[#316dca]">
        <input
          ref={searchInputRef}
          autoComplete="off"
          className="w-full px-2 py-2 text-sm font-light bg-transparent border-none focus:outline-none"
          type="text"
          name="search"
          onChange={e => setQuery(e.target.value)}
          placeholder="Search or jump to"
        />
        <SearchIcon height={20} className="mr-2" />
      </div>
      <div className="my-10 text-pryCol xs:bg-navCol"></div>
      <div className="grid gap-x-4 gap-y-9 md:grid-cols-3 lg:grid-cols-4">
        {users?.items?.map((user: IUserProps) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
