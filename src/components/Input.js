import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button } from '@mui/material';
const Input = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const handleClick = () => {
        value?dispatch({
            type: "ADD_TODO", payload: {
                id: Math.random(),
                text: value,
                isCompleted: false
            }
        }): alert("laaav eli")
        setValue("")
    }
    return (

        <Box sx={{ display: 'flex', alignItems: 'center', }}>
            <TextField size='small' sx={{ mr: 2 }} value={value} onChange={(e) => {
                e.preventDefault()
                setValue(e.target.value)
            }} />
            <Button variant="contained" color="success" onClick={()=>{handleClick()}}>Add</Button>
        </Box>


    );
};

export default Input;