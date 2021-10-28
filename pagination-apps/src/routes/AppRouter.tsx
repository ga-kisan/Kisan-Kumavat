import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import Post from "../components/Post";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
