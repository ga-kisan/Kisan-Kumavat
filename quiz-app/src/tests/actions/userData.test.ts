import { setUserData, setTestFinished } from "../../redux/actions/userData";

test("Should setup setUserData action object", () => {
  const action = setUserData({
    name: "Raj",
    gender: "Male",
    language: "English",
  });
  expect(action).toEqual({
    type: "SET_USER_DATA",
    payload: {
      name: "Raj",
      gender: "Male",
      language: "English",
    },
  });
});

test("Should setup setTestFinished action object", () => {
  const action = setTestFinished(true);
  expect(action).toEqual({
    type: "SET_TEST_FINISHED",
    payload: true,
  });
});
