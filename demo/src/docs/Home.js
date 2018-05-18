import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Button from "elevate-ui/Button";

function Home() {
  return (
    <Paper>
      <Typography type="title">Welcome</Typography>
      <Typography
        type="body"
        style={{
          margin: "8px 0 16px",
        }}
      >
        Elevate-UI is an opinionated toolkit of React components and patterns
        used for the rapid prototyping and development of web apps and sites for
        Elm Street Technology. It seeks to establish best practices around
        user-interface and user-experience design, for both the platform's
        users, as well as the developers.
      </Typography>
      <Button
        element="a"
        href="https://github.com/elm-street-technology/elevate-ui"
        target="_blank"
        rel="noopener noreferrer"
        isOutlined
      >
        Learn more on GitHub
      </Button>
    </Paper>
  );
}

export default Home;
