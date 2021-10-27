import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Capital from "../pages/Capital";

import Country from "../pages/Country";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/country" exact component={Country} />
        <Route path="/country/:capital" component={Capital} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
