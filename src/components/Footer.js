import { Button, Grid } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

const Footer = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({ type: "DELETE_COMPLETED" })
    }
    return (<>
        
        <Button onClick={handleClick} variant="contained" >Clear Completed</Button>
    </>
    );
};

export default Footer;