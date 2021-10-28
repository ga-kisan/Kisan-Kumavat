import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

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
    <div className="w-100">
      <table
        style={{ tableLayout: "fixed" }}
        className="table border mt-3 w-100"
      >
        <thead>
          <tr style={{ width: "100%" }}>
            <th style={{ width: "25%" }} scope="col">
              Title
            </th>
            <th style={{ width: "50%" }} scope="col">
              URL
            </th>
            <th style={{ width: "15%" }} scope="col">
              Created At
            </th>
            <th style={{ width: "10%" }} scope="col">
              Author
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr
              style={{ width: "100%" }}
              key={post.objectID}
              onClick={() => history.push(`/post/${post.objectID}`)}
            >
              <th style={{ width: "25%" }} scope="row">
                {post.title}
              </th>
              <td style={{ width: "50%" }}>{post.url}</td>
              <td style={{ width: "15%" }}>
                {moment(post.created_at_i).format("MMM Do YYYY, h:mm:ss a")}
              </td>
              <td style={{ width: "10%" }}>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
