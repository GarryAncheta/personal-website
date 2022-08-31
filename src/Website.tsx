import { Grid, IconButton, Link } from '@mui/material';
import React from 'react';
import { Navbar } from './Components';
import { About, Contact, Experience, Intro, Showcase } from './Components/Body';
import { useMediaQuery } from 'react-responsive';

import { Links, MobileLinks } from './Components/SM Links/Links';
import styles from "./Website.module.css";



const Website = () =>
{

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    return(

        <div className = { styles.website }>

            {/* Custom navbar from /Components/Navbar */}
            <Navbar />

            {/* MAIN BODY OF WEBSITE arranged as [ LEFT | MIDDLE | RIGHT ]*/}
            <Grid container className = { styles.body }>

                {/* LEFT GRID - SOCIAL MEDIA LINKS */}
                <Grid item xs = { 1 }>
                    <Links />
                </Grid>

                {/* CENTER GRID - ENTER ALL COMPONENTS IN HERE */}
                <Grid 
                item xs = { 10 } 
                className = { styles.main_grid }
                >
                    <Intro />
                    <About />
                    <Experience />
                    <Showcase /> 
                    <Contact />
                    { 
                        !isDesktopOrLaptop && 
                        <MobileLinks />
                    }
                </Grid>

                {/* RIGHT GRID - */}
                <Grid 
                item xs = { 1 } 
                className = { styles.email_container}
                >

                    { 
                        isDesktopOrLaptop &&
                        
                        <Link 
                        className = { styles.email } 
                        href = "mailto:garry.b.ancheta@gmail.com" 
                        target = "_blank" 
                        underline = "hover" 
                        >
                            garry.b.ancheta@gmail.com
                        </Link>
                    }

                </Grid>

            </Grid>

        </div>

    )

}

export default Website;
