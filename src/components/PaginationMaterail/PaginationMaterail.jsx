import { Link } from 'react-router-dom';
import { Pagination, PaginationItem, ThemeProvider } from '@mui/material';

import { PaginationTheme } from './PaginationMaterail.styled';

export const PaginationMaterail = ({ page, totalPages, changePage }) => {
  return (
    <>
      {!!page && (
        <ThemeProvider theme={PaginationTheme}>
          <Pagination
            color="primary"
            shape="rounded"
            size="large"
            count={totalPages}
            page={page}
            onChange={changePage}
            showFirstButton
            showLastButton
            renderItem={item => (
              <PaginationItem
                component={Link}
                to={`/?page=${item.page}`}
                {...item}
              />
            )}
          />
        </ThemeProvider>
      )}
    </>
  );
};
