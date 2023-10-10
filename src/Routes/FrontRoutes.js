/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Front } from "../Front";

function FrontRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Front />} />
    </Routes>
  );
}

export default FrontRoutes;
