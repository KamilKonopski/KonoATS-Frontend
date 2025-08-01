import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { initTheme } from "./common/utils/theme";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

import "./common/styles/main.css";

initTheme();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
