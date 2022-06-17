import Image from "next/image";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/state";
import { IUserProps } from "../ts-types/types";

const UserCard = ({ avatar_url, login }: IUserProps) => {
  const setUser = useSetRecoilState(userState);
  const router = useRouter();

  const handler = () => {
    setUser(login as string);
    router.push("/user");
  };

  return (
    <div className="p-4 mx-10 overflow-hidden text-center rounded-lg shadow-md cursor-pointer md:mx-0 md:max-w-full hover:shadow-borderCol ring-1 ring-borderCol">
      <div className="w-24 h-24 mx-auto overflow-hidden align-middle border-2 border-white border-solid rounded-full">
        <Image src={avatar_url!} alt="image" width={100} height={100} objectFit="cover" />
      </div>
      <p className="mt-4">{login}</p>
      <button
        className="block w-full px-2 py-1 mt-4 border-none rounded-md ring-1 ring-borderCol text-titleCol focus:outline-none active:scale-95 hover:bg-[#316dca] transition duration-300 ease-out transform hover:scale-105"
        onClick={handler}>
        More
      </button>
    </div>
  );
};

export default UserCard;
