import currentPage from "../../redux/reducers/currentPage";

test("Should set current page state", () => {
  const state = currentPage(1, {
    type: "SET_CURRENT_PAGE",
    payload: 3,
  });
  expect(state).toBe(3);
});
