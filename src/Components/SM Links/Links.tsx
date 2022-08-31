import React from "react";
import { Grid, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useMediaQuery } from "react-responsive";

import styles from "./Links.module.css";

const MobileLinks = () => {

    return(

        <div>
            <IconButton target = "_blank" href = "https://github.com/GarryAncheta">

                <GitHubIcon color = "primary"/>

            </IconButton>

            <IconButton target = "_blank" href = "https://www.linkedin.com/in/garryancheta">

                <LinkedInIcon color = "primary"/>

            </IconButton>


            <IconButton target = "_blank" href = "https://www.instagram.com/garryancheta/">

                <InstagramIcon color = "primary"/>

            </IconButton>


        </div>
    )
}

const NonMobileLinks = () => {

        return (

            
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

        )
}

const Links = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    return( 
        <div>
            { isDesktopOrLaptop && <NonMobileLinks /> } 
        </div>
    )
}

export { Links, MobileLinks };