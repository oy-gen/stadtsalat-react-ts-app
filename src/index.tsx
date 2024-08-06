import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/03_data-domain/store";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageOne from "./app/01_presentation/pages/page-one";
import PageTwo from "./app/01_presentation/pages/page-two";
import Nav from "./app/01_presentation/components/Nav";
import PageHome from "./app/01_presentation/pages/page-home";

const container = document.getElementById("root");
const root = container && createRoot(container);

root &&
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <div id="modal" />
        <BrowserRouter>
          <Routes>
            <Route element={<Nav />}>
              <Route path="/" element={<PageHome />} />
              <Route path="page-one" element={<PageOne />} />
              <Route path="page-two" element={<PageTwo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
