import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTeamPage from "./Pages/CreateTeamPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateTeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
