import React, { useState } from "react";
import styles from "./Experience.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps 
{
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = ( props: TabPanelProps ) =>
{
    const { children, value, index, ...other } = props;

    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
          {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}

        </div>
    )
}

const ariaControls = ( index : number ) =>
{
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

const Experience = (  ) =>
{
    const [ value, setValue ] = useState( 0 );

    const handleChange = ( event: React.SyntheticEvent, newValue: number ) => 
    {
        setValue(newValue);
    }

    return(
        <div className = { styles.default } id = "experience">

            <div>

                <h2>Experience</h2>

                <Box
                sx={{ flexGrow: 1, bgcolor: 'transparent', display: 'flex', minHeight: "50vh"}}
                >

                    <Tabs
                        orientation = "vertical"
                        variant = "scrollable"
                        value = {value}
                        onChange = { handleChange }
                        aria-label = "Vertical tabs example"
                        sx = {{ borderRight: 1, borderColor: 'divider', minWidth: "100px"}}
                    >

                        <Tab label="BuzzVoice" { ...ariaControls(0) } />

                    </Tabs>

                    <TabPanel 
                        value={value} 
                        index={0}
                    >
                        
                        <h3> Software Engineer Intern </h3>
                        <h5> BuzzVoice Inc. </h5>
                        <h6> May 2021 - August 2021 </h6> 

                        <Typography>
                            <ul>
                                <li> 
                                    Developed and tied a visualization of UI feedback to the back-end using Node JS 
                                    allowing for the user to use Buzz Voice API to visualize user voice inputs. 
                                </li>

                                <li>
                                    Provided consistent documentation allowing quick understanding of contributions and 
                                    quick sharing of tasks with other interns and software engineers resulting in completion of assigned internship goal.
                                </li>

                                <li>
                                    Engaged in system design which allowed for visualization of each component of the software 
                                    and provided a pathway for expeditious implementation.
                                </li>

                            </ul>
                        </Typography>

                    </TabPanel>


                </Box>

            </div>

        </div>
    )
}

export default Experience;