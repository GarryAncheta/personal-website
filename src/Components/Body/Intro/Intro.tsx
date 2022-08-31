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
            <h3 className = { styles.statement }> I love software development! </h3>
            <p className = { styles.description }> I am a software engineer with experience in backend engineering with a passion for full-stack engineer as well!.</p>

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