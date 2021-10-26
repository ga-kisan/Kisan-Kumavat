import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers/reducers";
import Home from "./pages/Home";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
