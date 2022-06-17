export interface IUserProps {
  id: number;
  avatar_url: string | null;
  name: string | null;
  login: string;
  bio: string | null;
  followers: number;
  following: number;
  location: string | null;
  email: string | null;
}

export interface IReposProps {
  id: number;
  name: string;
  description: string | null;
  url: string;
  forks: number;
  watchers: number;
  language: string;
  visibility: string;
  html_url: string;
}
