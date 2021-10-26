import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { addPosts } from "../actions/allPosts";
import { setCurrentPage, setTotalPage } from "../actions/pageValues";
import Table from "../components/Table";

type State = {
  pageValues: {
    currentPage: number;
    totalPage: number;
  };
};

const Home = () => {
  const pageValues = useSelector((state: State) => state.pageValues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageValues.totalPage === 0) {
      getData();
    } else {
      setTimeout(() => {
        getData();
      }, 10000);
    }
  }, [pageValues.totalPage]);

  const getData = async () => {
    const { data }: any = await axios.get(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageValues.totalPage}`
    );
    if (data.hits.length > 0) {
      dispatch(addPosts(data.hits));
      dispatch(setTotalPage());
      dispatch(setCurrentPage(1));
    }
  };

  return (
    <div className="container">
      <div>
        <button
          disabled={pageValues.currentPage <= 1}
          onClick={() => dispatch(setCurrentPage(-1))}
        >
          Prev Page
        </button>
        <span className="h4 px-3">Current Page: {pageValues.currentPage}</span>
        <span className="h4 px-3">Total Page: {pageValues.totalPage}</span>
        <button
          disabled={pageValues.totalPage <= pageValues.currentPage}
          onClick={() => dispatch(setCurrentPage(+1))}
        >
          Next Page
        </button>
      </div>
      <Table pageValues={pageValues} />
    </div>
  );
};

export default Home;
