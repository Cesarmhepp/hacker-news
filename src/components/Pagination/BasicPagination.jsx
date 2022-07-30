import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BasicPagination = ({ pages, setCurrentPage, currentPage }) => {

    const onChangePage = (event,value) => {
        setCurrentPage(value)
    }
    return (
        <Stack spacing={2}>
            <Pagination count={pages} 
            variant="outlined" 
            shape="rounded" 
            page={currentPage} 
            onChange={onChangePage} 
            defaultPage={0}/>
        </Stack>
    );
}

export default BasicPagination