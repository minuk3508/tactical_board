import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardPage from "./Pages/BoardPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
