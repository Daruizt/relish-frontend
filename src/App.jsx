import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { Layout } from './components';
import { Home, NotFound } from './views';

import { themeConfig } from './assets';
import { routes } from './routes/index';

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={themeConfig}>
        <Layout>
          <Routes>
            <Route path={routes.home.path} element={<Home />} />
            <Route path={routes.notFound.path} element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
