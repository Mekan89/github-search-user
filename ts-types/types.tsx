export interface IPropState {
  avatar_url?: string;
  followers_url?: string;
  following_url?: string;
  html_url?: string;
  id?: number;
  login?: string;
  node_id?: string;
  repos_url?: string;
  score?: number;
  starred_url?: string;
  url?: string;
}

export interface IUserProps {
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
}
