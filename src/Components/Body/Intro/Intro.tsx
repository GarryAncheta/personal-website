import { Button } from "@mui/material";
import React from "react";
import styles from "./Intro.module.css";
import Resume from "../../../assets/Garry Ancheta Resume.pdf";

const Intro = () => 
{
    return(
        <div className = { styles.display } id = "#">
            <h3 className = { styles.greeting }> Greetings! My name is</h3>
            <h1 className = { styles.name }> Garry Ancheta </h1>
            <h3 className = { styles.statement }> I like exploring web development! </h3>
            <p className = { styles.description }> I am an aspiring Software Engineer who will be graduating <br></br> in May 2022 with professional experience in JavaScript and Angular.</p>

            <div className = { styles.learn }>
                <Button 
                    variant = "outlined" 
                    size = "large" 
                    className = { styles.learn_button }
                    style = { { fontSize: "25px"}}
                    href = { Resume }
                    target = "_blank"
                > 
                    Resume
                </Button>
            </div>
        </div>
    )
}

export default Intro;