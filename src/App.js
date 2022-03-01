import React, { useState } from "react";
import ListItems from "./components/ListItem";
import Input from "./components/Input";
import { Grid } from "@mui/material";
import Footer from "./components/Footer";



function App() {
  return (
    <Grid container columns={12} direction='column'>
      <Grid item sx={12}>
        <Input />
      </Grid>
      <Grid item sx={12}>
        <ListItems />
      </Grid>
      <Grid item sx={12}>
        <Footer />
      </Grid>
    </Grid >
  );
}

export default App;
