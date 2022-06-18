import { ShareIcon, StarIcon } from "@heroicons/react/outline";
import { IReposProps } from "../ts-types/types";

const RepoCard = ({ name, description, url, forks, watchers, language, visibility, html_url }: IReposProps) => {
  const colors: any = {
    javascript: "bg-yellow-200",
    typescript: "bg-blue-500",
    dart: "bg-cyan-200",
    css: "bg-indigo-600",
    html: "bg-orange-600",
    python: "bg-blue-900",
  };

  return (
    <a href={html_url} target="_blank" rel="noopener noreferrer" className="transition duration-150">
      <div className="border border-[#32363f] space-y-3 rounded-md p-3  flex flex-col justify-between cursor-pointer min-h-[130px]">
        <div className="flex items-center justify-between">
          <span className="truncate text-[#689ef2] hover:underline">{name}</span>
          <span className="px-2 py-[2px] text-xs border rounded-full border-pryCol text-pryCol">{visibility}</span>
        </div>
        <p className="text-xs text-pryCol line-clamp-2">{description}</p>

        <div className="flex gap-3 ">
          {language && (
            <div className="flex items-center gap-2">
              <span
                className={`block w-3 h-3 ${colors[language?.toLowerCase()] || "bg-orange-900"} rounded-full`}></span>
              <p className="text-xs text-pryCol">{language}</p>
            </div>
          )}
          <span className="flex items-center gap-1 text-xs">
            <StarIcon height={15} />
            {watchers}
          </span>
          <span className="flex items-center gap-1 text-xs bg-ora">
            <ShareIcon height={15} />
            {forks}
          </span>
        </div>
      </div>
    </a>
  );
};

export default RepoCard;
