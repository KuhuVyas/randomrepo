import React from 'react'
//import { Box, Button, Card, Grid } from '@mui/material';
import Card from './components/Cards';
import './components/Card.css';
import {Grid} from '@mui/material';
import './App.css'

function App(){
  return(
   
    // <Grid container spacing={6}>
    
    //   <Grid item xs={10} sm={4} md={3} sx={{height:"250px", backgroundColor:"green"}}> I'm Kuhu</Grid>
    //   <Grid item xs={10} sm={4} md={3} sx={{height:"250px", backgroundColor:"yellow"}}> I'm Kuhu</Grid>
    //   <Grid item xs={10} sm={4} md={3} sx={{height:"250px", backgroundColor:"pink"}}> I'm Kuhu</Grid>
    //   <Grid item xs={10} sm={4} md={3} sx={{height:"250px", backgroundColor:"powderblue"}}> I'm Kuhu</Grid>

    // </Grid>
  
  <>
   <body>
  <Grid container spacing={2}//gap={10}
  alignItems='center'
  
 // width='100vw' 
  //height='100vh'
   >
<Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
  <Card title="Card1" description="card1 hai ye "/>
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
  <Card  title="Card2" description="card2 hai ye "/>
  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
    <Card  title="Card3" description="card3 hai ye"/>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
      <Card/>
    </Grid>
 
  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}  >
  <Card  title="Card5" description="card5 hai ye "/>
  </Grid>
  </Grid>  </body>
  </>
  );
}

export default App;