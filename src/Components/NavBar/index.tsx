import React from "react";
import { AppBar, Container, Slide, Button, useScrollTrigger, Toolbar } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import BrandLogo from "../../assets/BrandLogo.png";

interface Props
{
    children: React.ReactElement;
}

function HideOnScroll( { children }: Props )
{   
    const trigger = useScrollTrigger();

    return(
        <Slide appear = { false } direction = { "down" } in = { !trigger }>
            { children }
        </Slide>
    )
}

const useStyles = makeStyles({
    default: {
        padding: "10px",
    },
    logo: {
        height: "20%",
        width: "20%",
        float: "left",
        textAlign: "left"
    },
    toolbar:{
        float: "right"
    },
    button:{
        margin: "20px"
    }
})

const NavBar = ( ) =>
{
    const classes = useStyles();
    return(
        <HideOnScroll>
            <AppBar className = { classes.default } color="transparent" elevation={0}>
                <Container>

                    <img className = { classes.logo } src = { BrandLogo } />

                    <Toolbar className = { classes.toolbar }>

                        <Button variant="text" sx={{m: 1}}>
                            Home
                        </Button>

                        <Button variant="text" sx={{m: 1}}>
                            About
                        </Button>

                        <Button variant="text" sx={{m: 1}}>
                            Projects
                        </Button>

                        <Button variant="text" sx={{m: 1}}>
                            Contact
                        </Button>

                        <Button variant="text" sx={{m: 1}}>
                            Resume
                        </Button>

                    </Toolbar>
                    
                </Container>
            </AppBar>
        </HideOnScroll>
    )
}

export default NavBar;