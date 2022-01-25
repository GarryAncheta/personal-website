import { AppBar, Button, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/BrandLogo.png";


const Navbar = () =>
{
    const trigger = useScrollTrigger();

    return(
        <div className = { styles.default }>

            <Slide appear = { false } direction = "down" in = { !trigger }>

                <AppBar color = "transparent" elevation = { 0 } sx = {{ marginTop: "25px"}}>

                    <Toolbar>
                        
                        <a href = "/"> 
                            <img src = { Logo } width = "7.5%" alt = "Website Logo"/>
                        </a>
                        
                        
                        <div className = { styles.container }>

                            <Button href = "#about" variant="text" sx = {{fontSize: "20px"}}> 
                                About 
                            </Button>

                            <Button href = "#experience" variant="text" sx = {{fontSize: "20px"}}> 
                                Experience 
                            </Button>
                            
                            <Button href = "#showcase" variant="text" sx = {{fontSize: "20px"}}> 
                                Showcase 
                            </Button>

                            <Button href = "#contact" variant="text" sx = {{fontSize: "20px"}}> 
                                Contact 
                            </Button>

                        </div>

                    </Toolbar>

                </AppBar>

            </Slide>
            
        </div>
    )
}

export default Navbar;