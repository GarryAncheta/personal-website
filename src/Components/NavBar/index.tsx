import React from "react";
import { AppBar, Container, Slide, Button, useScrollTrigger, Toolbar } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import BrandLogo from "../../assets/BrandLogo.png";

const useStyles = makeStyles({
    default: {
        padding: "10px"
    },
    container:
    {
        width: "100vw"
    },
    logo: {
        display: "block",
        width: "auto",
        height: "auto",
        maxHeight: "100%",
        objectFit: "contain",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)"
    },
    toolbar:{
        float: "right"
    },
    button:{
        fontSize: "25px"
    }
})

const NavBar = ( ) =>
{
    const classes = useStyles();
    const trigger = useScrollTrigger();

    return(

            <Slide appear = { false } direction = "down" in = { !trigger }>

                <AppBar className = { classes.default } color="transparent" elevation={0} id="NavBar">
                    
                    <Container className = {classes.container}>

                        <img className = { classes.logo } src = { BrandLogo } />

                        <Toolbar className = { classes.toolbar }>

                            <Button variant="text" sx={{m: 1}} className = { classes.button }>
                                Home
                            </Button>

                            <Button variant="text" sx={{m: 1}} className = { classes.button }>
                                Projects
                            </Button>

                            <Button variant="text" sx={{m: 1}} className = { classes.button }>
                                Contact
                            </Button>

                            <Button variant="text" sx={{m: 1}} className = { classes.button }>
                                Resume
                            </Button>

                        </Toolbar>
                        
                    </Container>

                </AppBar>

            </Slide>
    )
}

export default NavBar;