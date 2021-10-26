import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import Post from "../pages/Post";

type State = {
  allPosts: any[];
  currentPosts: any[];
};

type Props = {
  pageValues: {
    currentPage: number;
    totalPage: number;
  };
};

const Table = ({ pageValues }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showId, setShowId] = useState("");
  const [filter, setFilter] = useState({
    query: "",
    ascending: false,
  });

  let currentPosts: {
    objectID: string;
    title: string;
    url: string;
    created_at_i: string;
    author: string;
  }[] = [];

  currentPosts = useSelector((state: State) =>
    state.allPosts.filter(
      (post, i) =>
        i >= pageValues.currentPage * 20 - 20 &&
        i <= pageValues.currentPage * 20 - 1
    )
  ).sort((a, b) => {
    if (filter.ascending) {
      if (a.created_at_i > b.created_at_i) return 1;
      if (a.created_at_i < b.created_at_i) return -1;
    } else {
      if (a.created_at_i > b.created_at_i) return -1;
      if (a.created_at_i < b.created_at_i) return 1;
    }
    return 0;
  });

  Modal.setAppElement("#root");

  return (
    <div>
      <div className="d-flex my-5">
        <input
          className="form-control"
          type="text"
          placeholder="Search by Title"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
        <button
          onClick={() => setFilter({ ...filter, ascending: !filter.ascending })}
          className="btn btn-secondary w-25 ms-3"
        >
          {filter.ascending ? (
            <span>
              Accending <i className="fas fa-sort-down"></i>
            </span>
          ) : (
            <span>
              Descending <i className="fas fa-sort-up"></i>
            </span>
          )}
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">URL</th>
            <th scope="col">Created At</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) =>
            filter.query ? (
              post.title.toLowerCase().includes(filter.query.toLowerCase()) ? (
                <tr
                  key={post.objectID}
                  onClick={() => {
                    setShowId(post.objectID);
                    setIsModalOpen(true);
                  }}
                >
                  <th scope="row">{post.title}</th>
                  <td>{post.url}</td>
                  <td>{`${new Date(post.created_at_i).getHours()}/${new Date(
                    post.created_at_i
                  ).getMinutes()}/${new Date(
                    post.created_at_i
                  ).getSeconds()}`}</td>
                  <td>{post.author}</td>
                </tr>
              ) : null
            ) : (
              <tr
                key={post.objectID}
                onClick={() => {
                  setShowId(post.objectID);
                  setIsModalOpen(true);
                }}
              >
                <th scope="row">{post.title}</th>
                <td>{post.url}</td>
                <td>{`${new Date(post.created_at_i).getHours()}:${new Date(
                  post.created_at_i
                ).getMinutes()}:${new Date(
                  post.created_at_i
                ).getSeconds()}`}</td>
                <td>{post.author}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Raw JSON data"
      >
        <div>
          <Post id={showId} />
          <button
            className="btn btn-secondary mt-3 ms-3"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
