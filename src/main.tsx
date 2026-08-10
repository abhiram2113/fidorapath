import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app/App";
import ATSResumeWriting from "./app/pages/ATSResumeWriting";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/ats-resume-writing"
          element={<ATSResumeWriting />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);