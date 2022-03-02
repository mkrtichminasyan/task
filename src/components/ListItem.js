import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemButton, Checkbox, ListItemText, Button, Grid } from '@mui/material';

const ListItems = () => {
    const data = useSelector((state) => state)
    const dispatch = useDispatch()

    const handleChange = (e,labelId) => {
        console.log(e.target.checked , labelId);
        dispatch({ type: "SET_CHECK", payload:{checked: e.target.checked , id:labelId}})


    }

    const handleDetate = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        })
    }

    return (

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map((e) => {
                const labelId = e.id;
                console.log(e);
                return (
                    <ListItem key={labelId} sx={{ p: 0 }}>
                        <Checkbox  onChange={(e)=>handleChange(e,labelId)} />
                        <ListItemText id={labelId} primary={e.text} />
                        <Button
                            variant="outlined"
                            onClick={() => { handleDetate(labelId) }}
                        >Delete</Button>
                    </ListItem>
                );
            })}
        </List>

    );
};

export default ListItems;