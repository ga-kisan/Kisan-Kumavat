import userData from "../../redux/reducers/userData";

const initialState = {
  name: "",
  gender: "",
  language: "",
  isTestFinished: false,
};

test("Should set user data state", () => {
  const state = userData(initialState, {
    type: "SET_USER_DATA",
    payload: {
      name: "Ram",
      language: "Hindi",
      gender: "Male",
      isTestFinished: false,
    },
  });
  expect(state).toEqual({
    name: "Ram",
    language: "Hindi",
    gender: "Male",
    isTestFinished: false,
  });
});

test("Should set finished state", () => {
  const state = userData(initialState, {
    type: "SET_TEST_FINISHED",
    payload: true,
  });
  expect(state).toEqual({
    name: "",
    language: "",
    gender: "",
    isTestFinished: true,
  });
});
