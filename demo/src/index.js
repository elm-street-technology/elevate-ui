import React from 'react';
import { render } from 'react-dom';
import ThemeProvider from '../../src/theme';

import '../../src/reset.css';
import '../../src/base.css';

import Main from './layout/Main';

render(
  <ThemeProvider>
    <Main />
  </ThemeProvider>,
  document.getElementById('demo')
);
