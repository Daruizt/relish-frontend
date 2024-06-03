import React from 'react';
import { styled, Typography } from '@mui/material';

import HeroPic from "../assets/static/backgrounds/hero-background.png"

const Hero = () => {

  return (
    <StyledHero>
    <HeroBackground src={HeroPic} />
      <HeroCover>
        <HeroTitle variant="h1" align="center">
          Welcome to <br />
          <strong>MetaPhoto</strong>
        </HeroTitle>
        <HeroSubTitle
          variant="h3"
          align="center"
        >
          All you need at your fingertips
        </HeroSubTitle>
      </HeroCover>
    </StyledHero>
  );
};

const StyledHero = styled('div')(({ theme }) => ({
    height: 'calc(100vh - 166px)',
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    zIndex: -3,
    [theme.breakpoints.only('xl')]: {
      height: 'calc(100vh - 219px)',
    },
  }));
  
  const HeroBackground = styled('img')({
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: -2,
    opacity: 0.5,
  });
  
  const HeroCover = styled('div')({
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });
  
  const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: 45,
    marginBottom: 25,
    color: '#fff',
    [theme.breakpoints.only('xl')]: {
      fontSize: 60,
      marginBottom: 30,
    },
  }));
  
  const HeroSubTitle = styled(Typography)(({ theme }) => ({
    fontSize: 25,
    color: '#fff',
    [theme.breakpoints.only('xl')]: {
      fontSize: 35,
    },
  }));
  
export default Hero;
