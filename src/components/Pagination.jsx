import React from 'react';
import { Pagination, styled } from '@mui/material';

const PaginationComponent = ({ totalItems, itemsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <CustomPagination
      count={pageNumbers.length}
      page={currentPage}
      onChange={(event, value) => paginate(value)}
      color="primary"
    />
  );
};

export default PaginationComponent;


const CustomPagination = styled(Pagination)(({ theme }) => ({
    '& .MuiPaginationItem-root': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    '& .Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    '& .MuiPaginationItem-root:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
  }));
  