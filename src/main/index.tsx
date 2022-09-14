import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import Router from "@/main/routes/router";

import { GlobalStyles, defaultTheme } from "@/presentation/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* The error below is caused by a type mismatch
     between @types/styled components and styled componenents.
     Please ignore. */}

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
