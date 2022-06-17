import { atom, selector } from "recoil";

export const menuState = atom({
  key: "menuState",
  default: false,
});

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const usersState = atom({
  key: "usersState",
  default: [],
});

export const userState = atom({
  key: "userState",
  default: "",
});

export const userDetails = atom({
  key: "userDetails",
  default: {},
});

// export const fetchUsers = selector({
//   key: "fetchUsers",
//   get: async ({ get }) => {
//     const rs = await fetch(
//       `https://api.github.com/search?q=${get(searchState)}&client_id=${
//         process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
//       }&client_secret=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET}`
//     ).then(res => res.json());
//     return rs;
//   },
// });

export const fetchUser = selector({
  key: "fetchUsers",
  get: async ({ get }) => {
    const rs = await fetch(`https://api.github.com/users/${get(userState)}`).then(res => res.json());
    return rs;
  },
});

export const filterState = atom({
  key: "filterState",
  default: { value: "", label: "None" },
});
