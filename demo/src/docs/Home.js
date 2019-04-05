import React from "react";
import withStyles from "elevate-ui/withStyles";
import Typography from "elevate-ui/Typography";
import Button from "elevate-ui/Button";

const Home = ({ classes }) => (
  <div className={classes.container}>
    <Typography type="title">Welcome</Typography>
    <Typography
      type="body"
      style={{
        margin: "8px 0 16px",
      }}
    >
      Elevate-UI is an opinionated toolkit of React components and patterns used
      for the rapid prototyping and development of web apps and sites for Elm
      Street Technology. It seeks to establish best practices around
      user-interface and user-experience design, for both the platform's users,
      as well as the developers.
    </Typography>
    <Button
      element="a"
      href="https://github.com/elm-street-technology/elevate-ui"
      target="_blank"
      rel="noopener noreferrer"
      isSecondary
    >
      Learn more on GitHub
    </Button>
  </div>
);

export default withStyles((theme) => ({
  container: {
    width: "100%",
    padding: "12px",
    maxWidth: "800px",
    margin: "45px auto",
    border: "none",
    background: "#fafafa",

    [theme.breakpoints(600)]: {
      padding: "24px 0px",
    },

    [theme.breakpoints(900)]: {
      margin: "45px auto 45px 80px",
    },
  },
}))(Home);
