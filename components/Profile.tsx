/* eslint-disable @next/next/no-img-element */
import { LocationMarkerIcon, MailIcon, UsersIcon } from "@heroicons/react/outline";
import userIcon from "../public/user.svg";
import { IUserProps } from "../ts-types/types";

const Profile = (props: IUserProps) => {
  const { avatar_url, name, login, bio, followers, following, location, email } = props;

  return (
    <div className="p-3 font-light md:max-w-xs">
      <img src={avatar_url || userIcon} alt="user image" className="w-48 h-48 mx-auto rounded-full md:w-48 md:h-48" />
      <h1 className="mt-3 text-xl font-bold ">{name}</h1>
      <p className="text-lg">{login}</p>
      <button className="hidden w-full px-3 py-1 my-4 text-sm font-bold border border-solid rounded-md md:inline hover:bg-borderCol hover:border-titleCol border-borderCol bg-navCol hover:text-titleCol">
        Follow
      </button>

      <p className="text-sm truncate">{bio}</p>

      <span className="flex items-center gap-1 mt-3 text-sm">
        <UsersIcon height={15} />
        {followers} followers · {following} following
      </span>
      {location && (
        <span className="flex items-center gap-1 my-3 text-sm">
          <LocationMarkerIcon height={15} />
          {location}
        </span>
      )}
      {email && (
        <span className="flex items-center gap-1 text-sm">
          <MailIcon height={15} />
          {email}
        </span>
      )}
    </div>
  );
};

export default Profile;
