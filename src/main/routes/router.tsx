import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MakeScheduleList, makeHome } from "@/main/factories/pages";
import { AppProvider } from "@/presentation/hooks";

const Router = (): React.ReactElement => (
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={makeHome()} />
        <Route path="/schedules" element={<MakeScheduleList />} />
        <Route path="*" element={<h1>404!</h1>} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

export default Router;
