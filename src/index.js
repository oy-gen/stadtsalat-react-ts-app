import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from "./routes/page-one";
import PageTwo from "./routes/page-two";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div id="modal" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="page-one" element={<PageOne />} />
          <Route path="page-two" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
