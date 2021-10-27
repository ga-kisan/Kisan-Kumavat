import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducer";
import AppRouter from "./routes/AppRouter";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
