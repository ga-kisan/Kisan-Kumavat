import { setCurrentPage } from '../../redux/actions/currentPage'

test("Should setup setCurrentPage action object", () => {
  const action = setCurrentPage(15)
  expect(action).toEqual({
    type: "SET_CURRENT_PAGE",
    payload: 15
  })
})