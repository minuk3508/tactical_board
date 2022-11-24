import { atom } from "recoil";

export const homePlayerListState = atom({
  key: "homePlayerListState",
  default: [{ number: "", name: "" }],
});

export const homeListSettingState = atom({
  key: "homeListSettingState",
  default: false,
});

export const awayPlayerListState = atom({
  key: "awayPlayerListState",
  default: [{ number: "", name: "" }],
});

export const awayListSettingState = atom({
  key: "awayListSettingState",
  default: false,
});

export const foldAndSpreadState = atom({
  key: "foldAndSpreadState",
  default: false,
});
