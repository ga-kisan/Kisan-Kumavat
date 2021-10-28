export const setTotalPage = () => ({
  type: "SET_TOTAL_PAGE",
});

export const setCurrentPage = (pageNumber: number) => ({
  type: "SET_CURRENT_PAGE",
  payload: pageNumber,
});
