import { UserData } from "../../types";

export const setUserData = (data: UserData) => ({
  type: "SET_USER_DATA",
  payload: data,
});

export const setTestFinished = (bool: boolean) => ({
  type: "SET_TEST_FINISHED",
  payload: bool,
});
