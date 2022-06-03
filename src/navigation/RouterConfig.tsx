import React from "react";
import { Route, Routes } from "react-router-dom";
import { LayoutOnboarding } from "../components";

import { ConfirmEmail } from "../pages/ConfirmEmail";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" >
        {/* Onboarding */}
        <Route element={<LayoutOnboarding />} >
          <Route path="/confirm-email" element={<ConfirmEmail />}/>
        </Route>
      </Route>
    </Routes>
  );
};
