/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import { fetcher } from "..";
import Card from "../../components/Card";
import CustomHead from "../../components/CustomHead";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import reposIcon from "../../public/repo.svg";
import { IReposProps } from "../../ts-types/types";

const User = () => {
  // const user = useRecoilValue(fetchUsers);
  // const userInfo = useRecoilValue(userState);
  // const userInfo = useRecoilValue(fetchUser);
  // const { login, avatar_url, followers, following, repos_url, bio, name, location } = userInfo;
  // const [userDetail, setUserDetail] = useRecoilState(userDetails);

  // const url = `https://api.github.com/users/${userInfo}`;
  const url = "https://api.github.com/users/Mekan89";
  const { data: user } = useSWR(url, fetcher);
  const { data: projects } = useSWR(user ? `https://api.github.com/users/${user.login}/repos` : null, fetcher);
  // const { data: projects } = useSWR(user ? () => `https://api.github.com/users/${user.login}/repos` : null);

  // const { login, avatar_url, followers, following, repos_url, bio, name, location } = user;
  console.log(projects);

  return (
    <div className="container p-2 md:px-3 md:pt-3 lg:max-w-5xl">
      <CustomHead title={"Github User"} />
      <Header />
      <main className="mt-14">
        <div className="flex flex-col md:flex-row">
          {/* <Profile data={data} /> */}
          <Profile {...user} />
          <div className="flex-1">
            <div className="bg-[#32363f] px-3 rounded-md">
              <span className="flex items-center gap-2 py-3 border-b-2 border-linkCol w-max">
                <img src={reposIcon.src} alt="reposIcon" className="w-5 h-5" />
                Repositories
              </span>
            </div>
            <div className="grid gap-3 mt-5 md:grid-cols-2">
              {projects?.map((repo: IReposProps) => (
                <Card key={repo.id} {...repo} />
              ))}
              {/* <Card /> */}
              {/* <Card /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
// avatar_url: "https://avatars.githubusercontent.com/u/5267776?v=4"
// bio: null
// blog: ""
// company: null
// created_at: "2013-08-20T07:22:18Z"
// email: null
// events_url: "https://api.github.com/users/yegen/events{/privacy}"
// followers: 0
// followers_url: "https://api.github.com/users/yegen/followers"
// following: 0
// following_url: "https://api.github.com/users/yegen/following{/other_user}"
// gists_url: "https://api.github.com/users/yegen/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/yegen"
// id: 5267776
// location: null
// login: "yegen"
// name: null
// node_id: "MDQ6VXNlcjUyNjc3NzY="
// organizations_url: "https://api.github.com/users/yegen/orgs"
// public_gists: 0
// public_repos: 0
// received_events_url: "https://api.github.com/users/yegen/received_events"
// repos_url: "https://api.github.com/users/yegen/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/yegen/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/yegen/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2016-02-27T10:42:02Z"
// url: "https://api.github.com/users/yegen"
