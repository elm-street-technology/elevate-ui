import React from 'react';
import { render } from 'react-dom';
import ThemeProvider from '../../src/theme';
import { BrowserRouter as Router } from 'react-router-dom';

import '../../src/reset.css';
import '../../src/base.css';

import Main from './layout/Main';

render(
  <ThemeProvider>
    <Router
      basename={
        window.location.href.includes('github.io') ? '/elevate-ui' : '/'
      }
    >
      <Main />
    </Router>
  </ThemeProvider>,
  document.getElementById('demo')
);
