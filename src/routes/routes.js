const routes = {
  home: {
    path: '/',
    tabTitle: 'Metaphoto - RelishIQ',
  },
  notFound: {
    path: '*',
    redirect: '/not-found',
    tabTitle: 'Not Found - RelishIQ',
  },
};

export default routes;
