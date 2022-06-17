import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import useSWR from "swr";
import { searchState } from "../atoms/state";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import { IPropState } from "../ts-types/types";
import { useDebounce } from "../utils/useDebounce";

export const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home: NextPage = () => {
  const query = useRecoilValue(searchState);

  const debounce = useDebounce(query, 1000);
  const url = `https://api.github.com/search/users?q=${debounce}&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET}`;

  const { data: users } = useSWR(url, fetcher);

  // console.log("SWR", users?.items);

  if (!users) <h1>Loading...</h1>;

  return (
    <div className="container p-2 md:px-3 md:pt-3 lg:max-w-5xl">
      <CustomHead title={"Github Clone"} />
      <Header />

      <main className="">
        <div className="my-10 text-pryCol xs:bg-navCol">
          <h1 className="text-2xl font-bold text-titleCol">
            {debounce ? `Search results for: ${debounce}` : "Search for Github Users"}
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-9 md:grid-cols-3 lg:grid-cols-4">
          {users?.items?.map((user: IPropState) => (
            <UserCard key={user.id} {...user} />
          ))}
          {/* {fetchedUsers?.items?.map((user: IPropState) => (
            <UserCard key={user.id} {...user} />
          ))} */}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

// const Profile: React.FC = () => {
//   const { username = 'endreumrb' } = useParams();
//   const [data, setData] = useState<Data>();

//   useEffect(() => {
//     Promise.all([
//       fetch(`https://api.github.com/users/${username}`),
//       fetch(`https://api.github.com/users/${username}/repos`),
//     ]).then(async (responses) => {
//       const [userResponse, reposResponse] = responses;

//       if (userResponse.status === 404) {
//         setData({ error: 'User not found' });
//         return;
//       }

//       const user = await userResponse.json();
//       const repos = await reposResponse.json();

//       const shuffledRepos = repos.sort(() => 0.5 - Math.random());
//       const slicedRepos = shuffledRepos.slice(0, 6);

//       setData({ user, repos: slicedRepos });
//     });
//   }, [username]);
