import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/Home";
import Asteroid from "./components/Asteroid";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/asteroid/:id" component={Asteroid} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
