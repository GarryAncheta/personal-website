import { Grid, IconButton, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Navbar } from './Components';
import { About, Contact, Experience, Intro, Showcase } from './Components/Body';
import styles from "./Website.module.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Website = () =>
{

  const redirect = ( url : any ) => 
  {
    window.open = url;
  }

  return(

    <div className = { styles.website }>

      <Navbar />

      <Grid container className = { styles.body }>

        <Grid item xs = { 1 }>
          
          <div className = { styles.socials_container }>
            
            <Grid container className = { styles.socials } spacing = { 3 }>

              <Grid item xs = { 12 }>

                <IconButton target = "_blank" href = "https://github.com/GarryAncheta">

                  <GitHubIcon color = "primary"/>

                </IconButton>
                

              </Grid>

              <Grid item xs = { 12 }>


                <IconButton target = "_blank" href = "https://www.linkedin.com/in/garryancheta">

                  <LinkedInIcon color = "primary"/>

                </IconButton>


              </Grid>
              
              <Grid item xs = { 12 }>

                <IconButton target = "_blank" href = "https://www.instagram.com/garryancheta/">

                  <InstagramIcon color = "primary"/>

                </IconButton>

              </Grid>
              
            </Grid>
          </div>

        </Grid>

        <Grid item xs = { 10 } className = { styles.main_grid }>
          <Intro />
          <div className = { styles.main_grid_break } />
          <About />
          <div className = { styles.main_grid_break } />
          <Experience />
          <div className = { styles.main_grid_break } />
          <Showcase /> 
          <div className = { styles.main_grid_break } />
          <Contact />
        </Grid>

        <Grid item xs = { 1 } className = { styles.email_container}>
          <Link className = { styles.email } href = "mailto:garry.b.ancheta@gmail.com" target = "_blank" underline = "hover" >
            garry.b.ancheta@gmail.com
          </Link>
        </Grid>

      </Grid>
      
    </div>
  )
}

export default Website;
