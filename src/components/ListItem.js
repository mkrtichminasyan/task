import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemButton, Checkbox, ListItemText, Button, Grid } from '@mui/material';

const ListItems = () => {
    const data = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch({ type: "SET_CHECK", payload: e.target.checked })
    }

    const handleDetate = () => {
        // dispatch({
        //     type: "DELETE_TODO",
        //     payload: false
        // })
    }

    return (

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map((e) => {
                const labelId = e.id;
                return (
                    <ListItem key={labelId} sx={{ p: 0 }}>
                        <Checkbox onChange={handleChange} />
                        <ListItemText id={labelId} primary={e.text} />
                        <Button
                            variant="outlined"
                            onClick={handleDetate}
                        >Delete</Button>
                    </ListItem>
                );
            })}
        </List>

    );
};

export default ListItems;