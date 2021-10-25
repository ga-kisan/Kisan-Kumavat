import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import dataReducer from "./dataReducer";
import Home from "./pages/Home";
import Asteroid from "./pages/Asteroid";

const store = createStore(dataReducer);

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
