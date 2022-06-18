import { atom } from "recoil";

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
