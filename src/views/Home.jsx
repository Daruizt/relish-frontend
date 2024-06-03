import React from 'react';
import { Helmet } from 'react-helmet';
import { routes } from '../routes/index';
import Hero from '../components/Hero';
import Filters from '../components/Filters';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{routes.home.tabTitle}</title>
      </Helmet>
      <Hero />
      <Filters />
    </>
  );
};

export default Home;