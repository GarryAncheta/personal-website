import React from "react";
import styles from "./About.module.css";
import { Grid } from "@mui/material";

import Garry from "../../../assets/garry.png";

const About = () => 
{
    return(
        <section  className = { styles.default } id = "about">
        
            <div>

                {/* Section Heading */}
                <h2> About Me! </h2>

                {/* Grid to separate text and picture */}
                <Grid container spacing = { 3 }>

                    {/* Enter information about yourself */}
                    <Grid item xs = { 8 }>
                        Hello! I am Garry Ancheta and I love the expansiveness of programming! 
                        Ever since my father gave me my first laptop, I had always been interested in how a computer works.
                        Although my interests were with computers, I came into college not wanting to study computers, but rather medicine.
                        Two years in, I came to the realization that I was not invested in my major as I believed. As I searched for alternatives, I decided to
                        take a leap of faith. Persevering through my fear of math, I was able to find a passion for Computer Science!
                        <br/> <br/>
                        As of the day you are reading this, I have found an awesome appreciation for programming and took my first step 
                        into making it a career through my internship with BuzzVoice Inc. during the Summer of 2021. 
                        With the internship, I was able to get a taste of full stack web development using Angular and TypeScript!
                    </Grid>

                    {/* Image, centered within the grid */}
                    <Grid item xs = { 4 } className = { styles.picture }>
                        <img src = { Garry } alt = "Me!" className = { styles.headshot }/>
                    </Grid>

                </Grid>
            </div>

        </section>
    )
}

export default About;