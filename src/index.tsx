import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App/AppContainer";
import store from "./store";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
