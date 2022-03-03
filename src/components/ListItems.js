import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Checkbox, ListItemText, Button, } from '@mui/material';

const ListItems = () => {
    const { toDoList } = useSelector((state) => state)
    console.log(toDoList)
    const dispatch = useDispatch()

    const handleChange = (e, labelId) => {
        const newToDo = [...toDoList]
        newToDo.forEach((item) => {
            if (item.id === labelId) {
                item.isComplated = e.target.checked
            }
        })
        dispatch({ type: "SET_CHECK", payload: newToDo })
    }

    const handleDetate = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id
        })
    }
    return (

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {toDoList.map((e) => {
                const labelId = e.id;
                return (
                    <ListItem key={labelId} sx={{ p: 0 }}>
                        <Checkbox onChange={(e) => handleChange(e, labelId)} />
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