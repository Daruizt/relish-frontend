import React, { useState } from 'react';
import { styled, Container, Grid, TextField, Button } from "@mui/material";
import useFilters from '../hooks/useInitiateApp';
import { FilterAlt } from '@mui/icons-material';
import DynamicPhotoCard from './DynamicPhotoCard';
import PaginationComponent from './Pagination';

const Filters = () => {
  const { handleFilterChange, filteredData, currentPage, itemsPerPage, paginate } = useFilters();
  const [titleFilterValue, setTitleFilterValue] = useState('');
  const [albumFilterValue, setAlbumFilterValue] = useState('');
  const [userEmailFilterValue, setUserEmailFilterValue] = useState('');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <StyledHome>
      <StyledHeroContainer container justifyContent="center" alignItems="center">
        <Grid container item xs={9} spacing={2} alignItems="center">
          <Grid item xs={3}>
            <StyledTextField 
              label="Photo Title" 
              value={titleFilterValue} 
              onChange={(e) => setTitleFilterValue(e.target.value)} 
              fullWidth  
              variant="filled" 
            />
          </Grid>
          <Grid item xs={3}>
            <StyledTextField 
              label="Album Title" 
              value={albumFilterValue} 
              onChange={(e) => setAlbumFilterValue(e.target.value)} 
              fullWidth 
              variant="filled" 
            />
          </Grid>
          <Grid item xs={3}>
            <StyledTextField 
              label="User Email" 
              value={userEmailFilterValue} 
              onChange={(e) => setUserEmailFilterValue(e.target.value)} 
              fullWidth 
              variant="filled" 
            />
          </Grid>
          <Grid item xs={3}>
            <StyledButton 
              variant="contained" 
              color="primary" 
              fullWidth 
              onClick={() => {
                handleFilterChange('title', titleFilterValue);
                handleFilterChange('albumTitle', albumFilterValue);
                handleFilterChange('userEmail', userEmailFilterValue);
              }}
              startIcon={<FilterAlt/>}
            >
              Filter
            </StyledButton>
          </Grid>
        </Grid>
        <Grid container item xs={9} spacing={2} style={{ marginTop: '20px'}}>
          {currentItems.map((photo) => (
            <Grid item xs={9} sm={6} md={4} key={photo.id}>
              <DynamicPhotoCard 
                imageUrl={photo.url} 
                photoTitle={photo.title} 
                albumName={photo.album.title} 
                author={photo.album.user.name} 
              />
            </Grid>
          ))}
        </Grid>
        <Grid container item xs={12} justifyContent="center" style={{ marginTop: '20px' }}>
          <PaginationComponent 
            totalItems={filteredData.length} 
            itemsPerPage={itemsPerPage} 
            paginate={paginate} 
            currentPage={currentPage} 
          />
        </Grid>
      </StyledHeroContainer>
    </StyledHome>
  );
};

export default Filters;

const StyledHome = styled(Container)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "40vh"
}));

const StyledHeroContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  paddingInline: 55,
  marginTop: '10vh',
  marginBottom: '10vh',
  [theme.breakpoints.only("xl")]: {
    paddingInline: 70,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "#ffffff", 
  },
  "& .MuiInputLabel-root": {
    color: "#ffffff", 
  },
  "& .MuiFilledInput-underline:before": {
    borderBottomColor: "#ffffff", 
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#ffffff", 
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxSizing: 'border-box',
    height: '56px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: '56px',
  boxSizing: 'border-box',
}));
