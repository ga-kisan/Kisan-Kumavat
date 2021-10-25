import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
  let currentPosts: {
    objectID: string;
    title: string;
    url: string;
    created_at_i: string;
    author: string;
  }[] = [];
  const history = useHistory();

  currentPosts = useSelector((state: State) =>
    state.allPosts.filter(
      (post, i) =>
        i >= pageValues.currentPage * 20 - 20 &&
        i <= pageValues.currentPage * 20 - 1
    )
  );

  return (
    <div>
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
          {currentPosts.map((post) => (
            <tr
              key={post.objectID}
              onClick={() => history.push(`/post/${post.objectID}`)}
            >
              <th scope="row">{post.title}</th>
              <td>{post.url}</td>
              <td>{`${new Date(post.created_at_i).getDay()}/${new Date(
                post.created_at_i
              ).getMonth()}/${new Date(post.created_at_i).getFullYear()}`}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
