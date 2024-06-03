import React from 'react';
import { Card, CardMedia, CardContent, Typography, Tooltip, styled } from '@mui/material';

const DynamicPhotoCard = ({ imageUrl, photoTitle, albumName, author }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={imageUrl}
        title={photoTitle}
      />
      <CardContent>
        <Tooltip title={photoTitle} placement="top">
          <StyledTypography gutterBottom variant="subtitle1" component="div">
            {photoTitle}
          </StyledTypography>
        </Tooltip>
        <StyledTypography variant="body2" color="text.secondary">
          Album: {albumName}
        </StyledTypography>
        <StyledTypography variant="body2" color="text.secondary">
          Author: {author}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  height: 300,
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    '& img': {
      filter: 'none',
    },
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
  filter: 'grayscale(100%)',
  transition: 'filter 0.3s ease',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export default DynamicPhotoCard;
