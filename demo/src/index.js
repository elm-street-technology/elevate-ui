import React from "react";
import { render } from "react-dom";
import ThemeProvider from "elevate-ui/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { unregister } from "./registerServiceWorker";

import Main from "./layout/Main";

render(
  <ThemeProvider
    theme={{
      overrides: {
        EuiPaper: {
          withPadding: {
            "@media screen and (min-width: 600px)": {
              padding: "20px",
            },
          },
        },
      },
    }}
  >
    <Router>
      <Main />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

unregister();
