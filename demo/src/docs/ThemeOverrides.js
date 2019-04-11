import React from "react";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import ThemeProvider from "elevate-ui/ThemeProvider";
import Typography from "elevate-ui/Typography";
import InputDocs from "./Input";

const ThemeOverrides = ({ classes }) => (
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
    <Paper className={classes.wrapper}>
      <div className={classes.headingContainer}>
        <Typography type="title">Theme Overrides</Typography>
        <Typography type="body" gutterTop gutterBottom>
          Elevate-UI allows you to declare theme-level overrides for components.
          For example, if you want to change the border color of every Input
          component, you can declare it in the theme.
        </Typography>
      </div>

      <Typography type="body" gutterTop style={{ marginBottom: "32px" }}>
        <span role="img" aria-label="star">
          ⭐️
        </span>{" "}
        You can nest ThemeProviders and overrides will only be applied to the
        child component. Neat!
      </Typography>
      <InputDocs />
    </Paper>
  </ThemeProvider>
);

export default withStyles((theme) => ({
  headingContainer: {
    marginBottom: "24px",
  },
  wrapper: {
    maxWidth: "680px",
    margin: "45px auto",

    [theme.breakpoints(900)]: {
      margin: "45px 45px 45px -200px",
    },
  },
}))(ThemeOverrides);
