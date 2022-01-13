import React from "react";
import styles from "./Showcase.module.css";

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { CardHeader, Grid, IconButton } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Showcase = () =>
{

    return(
        <div className = { styles.default } id = "showcase">
            <div>
                <h2> Project Showcase </h2>

                <Grid container>

                    <Grid container xs = { 12 } spacing = { 8 } alignItems = "stretch">

                        <Grid item xs = { 4 } >
                            <Card sx={{ height: 300, bgcolor: "#001017"  }}>
                                <CardHeader action = { <AssignmentTurnedInOutlinedIcon sx = {{ color: "#00a4e6"}}/>} title = "NOBL Web Application & API"/>
                                <CardContent>
                                    <Typography variant="body2">
                                        A Full Stack Capstone project where I was the Team Lead for the group. This web application integrated Auth0 and ECharts
                                        and used a SQL backend with a custom API to send data to and from the database.
                                    </Typography>
                                    <br />
                                    
                                </CardContent>
                                <CardActions>
                                    <Typography variant="caption">
                                        React, Gatsby, Auth0, NodeJS, SQL
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs = { 4 }>
                            <Card sx={{ height: 300, bgcolor: "#001017"  }}>
                                <CardHeader action = { <AssignmentTurnedInOutlinedIcon sx = {{ color: "#00a4e6"}}/>} title = "ChitChat - Chatting App"/>
                                <CardContent>

                                    <Typography variant="body2">
                                        Integrated Stream with web application allowing messaging between groups and/or individuals and used
                                        NodeJS to implement basic authentication which allowed user logins and registrations.
                                    </Typography>
                                    <br />
                                    
                                </CardContent>
                                <CardActions>
                                    <Typography variant="caption">
                                        React, Stream.io, NodeJS
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs = { 4 }>
                            <Card sx={{ height: 300, bgcolor: "#001017"  }} >
                                <CardHeader action = { <AssignmentTurnedInOutlinedIcon sx = {{ color: "#00a4e6"}}/>} title = "COVID Statistics Website"/>
                                <CardContent>
                                    <Typography variant="body2">
                                        Used Disease.sh to pull COVID statistics for display in a front-end interface created with Material UI and React. 
                                        Also implemented data visualization with Recharts to show different aspects of the COVID pandemic.
                                    </Typography>
                                    <br />
                                    
                                </CardContent>
                                <CardActions>
                                    <Typography variant="caption">
                                        React, Material UI, Disease.sh, Recharts
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>

                    </Grid>


                </Grid>
            </div>
        </div>
    )
}

export default Showcase;