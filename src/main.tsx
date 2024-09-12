import { createRoot } from "react-dom/client";
import "./index.css";
import { pdfjs } from "react-pdf";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store/index.js";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { WrappedApp } from "./App";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <PersistGate loading={null} persistor={persistor}>
          <WrappedApp />
        </PersistGate>
      </ErrorBoundary>
      <ToastContainer />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
