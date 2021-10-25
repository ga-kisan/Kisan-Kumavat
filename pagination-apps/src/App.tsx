import { createStore } from "redux";
import { Provider } from "react-redux";

import AppRouter from "./routes/AppRouter";
import reducers from "./reducers/reducers";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
