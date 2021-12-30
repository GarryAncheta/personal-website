import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Intro from './Components/Body/Intro';
import NavBar from './Components/NavBar';


const useStyles = makeStyles({
  default:
  {
    minHeight: "100vh"
  }
})

const Website = () =>
{
  const classes = useStyles();

  return(
    <div className = { classes.default }>
      <NavBar />

      <Grid container>

        <Grid item xs={2}>

        </Grid>

        <Grid item xs={8}>
          <Intro />
        </Grid>

        <Grid item xs={2}>
          
        </Grid>

      </Grid>
    </div>

  )
}

export default Website;
