import React from "react";
import { render } from "react-dom";
import ThemeProvider from "elevate-ui/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { unregister } from "./registerServiceWorker";

import Main from "./layout/Main";

render(
  <ThemeProvider>
    <Router
      basename={
        window.location.href.includes("github.io") ? "/elevate-ui" : "/"
      }
    >
      <Main />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

unregister();
