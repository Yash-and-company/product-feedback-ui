import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import userStore from "./store/dataStore/userStore/userStore";

const Stores = {
	userStore,
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider {...Stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
