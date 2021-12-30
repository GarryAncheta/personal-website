import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    default: {
        position: "static",
        flexGrow: "1"
    }
})

const Intro = () =>
{
    const classes = useStyles();

    return(
        <div className = { classes.default }>
            Testing 1, 2, 3
        </div>
    )
}

export default Intro;