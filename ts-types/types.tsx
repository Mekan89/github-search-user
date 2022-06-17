export interface IUserProps {
  id: number;
  avatar_url: string | null;
  name: string | null;
  login?: string;
  bio: string | null;
  followers: number | null;
  following: number | null;
  location: string | null;
  email: string | null;
}

export interface IReposProps {
  name: string;
  description: string | null;
  url: string;
  forks?: number;
  watchers?: number;
  language: string;
  visibility: string;
  id: number;
  html_url: string;
}
