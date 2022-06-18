/* eslint-disable @next/next/no-img-element */
import { useRecoilValue } from "recoil";
import useSWR from "swr";
import { fetcher } from "..";
import { userState } from "../../atoms/state";
import Layout from "../../components/Layout";
import Profile from "../../components/Profile";
import RepoCard from "../../components/RepoCard";
import reposIcon from "../../public/repo.svg";
import { IReposProps } from "../../ts-types/types";

const User = () => {
  const userInfo = useRecoilValue(userState);
  const url = `https://api.github.com/users/${userInfo}`;
  const { data: user } = useSWR(url, fetcher);
  const { data: repos } = useSWR(user ? `https://api.github.com/users/${user.login}/repos` : null, fetcher);

  return (
    <Layout title={"Github User"}>
      <main className="mt-14">
        <div className="flex flex-col md:flex-row">
          <Profile {...user} />
          <div className="flex-1">
            <div className="border-b-2 border-b-[#32363f] px-3 rounded-md">
              <p className="flex items-center gap-2 py-3 border-b-2 border-linkCol w-max">
                <img src={reposIcon.src} alt="reposIcon" className="w-5 h-5" />
                Repositories
                <span className="px-2 text-sm bg-[#32363f] rounded-full">{repos?.length}</span>
              </p>
            </div>
            <div className="grid gap-3 mt-5 md:grid-cols-2">
              {repos?.map((repo: IReposProps) => (
                <RepoCard key={repo.id} {...repo} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default User;
