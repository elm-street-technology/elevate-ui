import React from 'react';
import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';
import Button from '../../../src/components/button';

function Home() {
  return (
    <Paper>
      <Typography type="title">Welcome</Typography>
      <Typography
        type="body"
        style={{
          margin: '8px 0 16px',
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
