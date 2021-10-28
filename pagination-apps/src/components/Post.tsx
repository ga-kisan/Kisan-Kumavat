import { useSelector } from "react-redux";

type Props = {
  match: {
    params: {
      id: string;
    };
  };
};

type State = {
  allPosts: any[];
  currentPosts: any[];
};

const Post = (props: Props) => {
  const id = props.match.params.id;
  const post = useSelector((state: State) =>
    state.allPosts.find((post) => post.objectID === id)
  );

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center pb-3">Row JSON Data</h1>
      <hr className="dropdown-divider" />
      <code>{JSON.stringify(post)}</code>
    </div>
  );
};

export default Post;
