import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./checkbox.scss";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./services/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={"...LOADING"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
