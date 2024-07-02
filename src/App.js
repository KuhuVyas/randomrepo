import React from 'react'
//import { Box, Button, Card, Grid } from '@mui/material';
import Card from './components/Cards';
import './components/Card.css';
import {Grid} from '@mui/material';

function App(){
  return(
    // <Grid container spacing={6}>
    
    //   <Grid item xs={10} sm={4} md={3} sx={{height:"250px", backgroundColor:"green"}}> I'm Kuhu</Grid>
    //   <Grid item xs={10} sm={4} md={3} sx={{height:"250px", backgroundColor:"yellow"}}> I'm Kuhu</Grid>
    //   <Grid item xs={10} sm={4} md={3} sx={{height:"250px", backgroundColor:"pink"}}> I'm Kuhu</Grid>
    //   <Grid item xs={10} sm={4} md={3} sx={{height:"250px", backgroundColor:"powderblue"}}> I'm Kuhu</Grid>

    // </Grid>
  
  <>
  <Grid container spacing={2}//gap={10}
  alignItems='center'
  
 // width='100vw' 
  //height='100vh'
   >
<Grid item  xs={12} sm={6} md={3} sx={{height:"300px"}}>
  <Card title="Card1" description="card1 hai ye "/>
  </Grid>

  <Grid item xs={12} sm={6} md={3} sx={{height:"300px"}}>
  <Card  title="Card2" description="card2 hai ye "/>
  </Grid>

  <Grid item xs={12} sm={6} md={3} sx={{height:"300px"}}>
    <Card  title="Card3" description="card3 hai ye"/>
    </Grid>

    <Grid item xs={12} sm={6} md={3} sx={{height:"300px"}}>
      <Card/>
    </Grid>
 
  <Grid item xs={12} sm={6} md={3}  sx={{height:"300px"}}>
  <Card  title="Card5" description="card5 hai ye "/>
  </Grid>
  </Grid>
  </>
  );
}

export default App;