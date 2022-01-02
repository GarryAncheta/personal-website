import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    default: {
        position: "relative",
        height: "100vh"
    },
    container:
    {

    },
    greeting: {
        fontSize: "35px",
    },
    name: {
        fontSize: "80px"
    },
    summary: {
        fontSize: "20px"
    }
})

const Intro = () =>
{
    const classes = useStyles();

    return(
        <div className = { classes.default }>

            <Container className = { classes.container}>

                <Typography className = { classes.greeting }>
                    Greetings, I am
                </Typography>

                <Typography className = { classes.name }>
                    Garry Ancheta!
                </Typography>
                
                <Typography className = { classes.summary }>
                    I am an aspiring Software Engineer with experience with Angular, React, JavaScript, and TypeScript. 
                    Currently, I am expecting to graduate in May 2022 with a B.S. in Computer Science.
                </Typography>

                <Typography className = { classes.name }>
                    Testing #2
                </Typography>

            </Container>
            
        </div>
    )
}

export default Intro;