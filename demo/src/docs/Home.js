import React from 'react';
import Paper from '../../../src/components/paper';
import Typography from '../../../src/components/typography';

function Home() {
  return (
    <Paper>
      <Typography type="title">Welcome</Typography>
      <Typography type="body">
        This is my experimental sandbox for building and testing new components
        with different libraries for use in React Apps.
      </Typography>
    </Paper>
  );
}

export default Home;
