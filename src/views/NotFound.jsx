import React from 'react';
import { Helmet } from 'react-helmet';
import { styled, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { routes } from '../routes/index';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>{routes.notFound.tabTitle}</title>
      </Helmet>
      <StyledNotFound>
        <StyledNotFoundTitle variant="h1" align="center">
          404 <br />
          Not Found
        </StyledNotFoundTitle>
        <StyledReturnButton
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate(routes.home.path)}
        >
          Return to Home
        </StyledReturnButton>
      </StyledNotFound>
    </>
  );
};

export default NotFound;

const StyledNotFound = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: 'calc(100vh - 75px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.only('xl')]: {
    minHeight: 'calc(100vh - 95px)',
  },
}));

const StyledNotFoundTitle = styled(Typography)(({ theme }) => ({
  fontSize: 55,
  marginBottom: 30,
  color: theme.palette.background.default,
  [theme.breakpoints.only('xl')]: {
    fontSize: 70,
    marginBottom: 40,
  },
}));

const StyledReturnButton = styled(Button)(({ theme }) => ({
  color: 'white',
  fontSize: 16,
  [theme.breakpoints.only('xl')]: {
    fontSize: 20,
  },
}));
