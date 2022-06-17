// avatar_url: "https://avatars.githubusercontent.com/u/681951?v=4"
// events_url: "https://api.github.com/users/Mekan/events{/privacy}"
// followers_url: "https://api.github.com/users/Mekan/followers"
// following_url: "https://api.github.com/users/Mekan/following{/other_user}"
// gists_url: "https://api.github.com/users/Mekan/gists{/gist_id}"
// gravatar_id: ""
// html_url: "https://github.com/Mekan"
// id: 681951
// login: "Mekan"
// node_id: "MDQ6VXNlcjY4MTk1MQ=="
// organizations_url: "https://api.github.com/users/Mekan/orgs"
// received_events_url: "https://api.github.com/users/Mekan/received_events"
// repos_url: "https://api.github.com/users/Mekan/repos"
// score: 1
// site_admin: false
// starred_url: "https://api.github.com/users/Mekan/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/Mekan/subscriptions"
// type: "User"
// url: "https://api.github.com/users/Mekan"

import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/state";
import { IPropState } from "../ts-types/types";

const UserCard = (props: IPropState) => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const { avatar_url, followers_url, following_url, html_url, id, login, node_id, repos_url, score, starred_url } =
    props;

  // const url = `https://api.github.com/users/${login}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`;
  // const { data: user1, error: error2 } = useSWR(url, fetcher);
  // console.log(user1);

  const handler = () => {
    setUser(login as string);
    router.push("/user");
  };

  return (
    <div className="p-4 overflow-hidden text-center rounded-lg shadow-md cursor-pointer hover:shadow-borderCol ring-1 ring-borderCol">
      {/* <div className="relative w-24 h-24 -mt-8 border-2 border-white border-solid rounded-full"> */}
      <div className="w-24 h-24 mx-auto overflow-hidden align-middle border-2 border-white border-solid rounded-full">
        <Image src={avatar_url!} alt="image" width={100} height={100} objectFit="cover" />
        {/* layout="fill"  */}
      </div>
      <p className="mt-4">{login}</p>
      {/* <Link href={`https://api.github.com/users/${login}`}> */}
      <button
        className="block w-full px-2 py-1 mt-4 border-none rounded-md ring-1 ring-borderCol text-titleCol focus:outline-none active:scale-95 hover:bg-[#316dca] transition duration-300 ease-out transform hover:scale-105"
        onClick={handler}>
        {/* <a className="block w-full px-2 py-1 mt-4 border-none rounded-md ring-1 ring-borderCol text-titleCol focus:outline-none active:scale-95 hover:bg-[#316dca] transition duration-300 ease-out transform hover:scale-105"> */}
        More
      </button>
    </div>
  );
};

export default UserCard;
