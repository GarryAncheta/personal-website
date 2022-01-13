import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import styles from "./Contact.module.css";

const Contact = () =>
{
    return(
        <div id = "contact" className = { styles.default }>
            <div>
                <h2>Contact</h2>
                <Typography variant = "h2">
                    Wanna chat?
                </Typography>
                <Typography variant="h6">
                    If you believe that I am perfect for an opportunity or
                    if you just want to stop by and say hi, do not hestitate to do so!
                    <br />
                    My motto is, "People first, tech always." Any questions, comments, or concerns that you might have...
                    To me, it doesn't matter. Contact me if you deem it necessary! 
                </Typography>
                <br />

                <div className = { styles.container }>

                    <div className = { styles.buttons }>
                        <br />
                        <Button 
                            variant = "outlined" 
                            size = "large" 
                            sx = {{minHeight: "10vh"}} 
                            target = "_blank"
                            href = "mailto:garry.b.ancheta@gmail.com"
                        > 
                            Hello Hello 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;