import React from 'react';
import { styled, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterInfoContainer>
          <StyledFooterText variant="caption">
            © Diego {new Date().getFullYear()}, All Rights Reserved
          </StyledFooterText>
        </StyledFooterInfoContainer>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: '#000',
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 1000,
}));

const StyledFooterInfoContainer = styled('div')(({ theme }) => ({
  width: '100%',
  paddingBlock: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.only('xl')]: {
    paddingBlock: 25,
  },
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: 'white',
  marginRight: 15,
  [theme.breakpoints.only('xl')]: {
    fontSize: 14,
  },
}));