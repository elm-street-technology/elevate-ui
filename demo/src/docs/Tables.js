import React from 'react';
import Paper from 'elevate-ui/Paper';
import Typography from 'elevate-ui/Typography';

function Home() {
  return (
    <Paper>
      <Typography type="title">{`<Table />`}</Typography>
      <Typography type="body">
        The {`<Table />`} component is a styled wrapper around the lightweight,
        fast, and extendable datagrid [React-Table](https://react-table.js.org).
      </Typography>
    </Paper>
  );
}

export default Home;
