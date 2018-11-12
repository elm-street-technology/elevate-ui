import React from "react";
import Paper from "elevate-ui/Paper";
import ThemeProvider from "elevate-ui/ThemeProvider";
import Typography from "elevate-ui/Typography";
import InputDocs from "./Input";

const ThemeOverrides = () => (
  <ThemeProvider
    theme={{
      colors: {
        primary: "navy",
      },
      overrides: {
        EuiButton: {
          root: {
            width: "100%",
          },
          children: {
            fontSize: "18px",
            padding: "14px 24px",
          },
        },
        EuiInput: {
          root: {
            fontSize: "20px",
            backgroundColor: "#fff",
            borderWidth: "2px",
            borderColor: "#232425",
            borderRadius: "4px",
            padding: "14px 16px",
            height: "auto",
          },
        },
        EuiLabel: {
          root: {
            color: "#232425",
            fontSize: "16px",
            marginBottom: "8px",
          },
        },
        EuiValidation: {
          root: {
            fontSize: "16px",
            padding: "6px 16px",
          },
        },
      },
    }}
  >
    <Paper style={{ marginBottom: "8px" }}>
      <Typography type="title">Theme Overrides</Typography>
      <Typography type="body" gutterTop gutterBottom>
        Elevate-UI allows you to declare theme-level overrides for components.
        For example, if you want to change the border color of every Input
        component, you can declare it in the theme.
      </Typography>
      <Typography type="body" gutterTop style={{ marginBottom: "32px" }}>
        You can nest ThemeProviders and overrides will only be applied to the
        child component. Neat!
      </Typography>
    </Paper>
    <InputDocs />
  </ThemeProvider>
);

export default ThemeOverrides;
