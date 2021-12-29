import React from "react";
import { AppBar, Container, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
     logo: {
         height: "20%",
         width: "20%",
     }
})

const NavBar = ( ) =>
{
    const classes = useStyles();
    return(
        <HideOnScroll>
            <AppBar>
                <Container>
                    <img className = { classes.logo } src = { BrandLogo } />
                </Container>
            </AppBar>
        </HideOnScroll>
    )
}

export default NavBar;