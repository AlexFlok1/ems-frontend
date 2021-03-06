import { Grid, Paper, Accordion , AccordionSummary, AccordionDetails, Typography, Button } from '@material-ui/core'

import { useEffect, useState } from 'react'
import './TrainingsComponent.css'

const TrainingsComponent = () => {

    const [ departments, setDepartments ] = useState( [ "Department 1", "Department 2","Department 3" ] )
    const [ trainings, setTrainings ] = useState([])

    // this method will pull all trainigs related to selected department
    const getTrainings = async ( department ) => {
        
        //fetch data
        setTrainings( [
            {
                name: 'Training 1',
                details: 'Here will be traing details'
            },
            {
                name: 'Training 2',
                details: 'Here will be traing details'
            }
        ] )

    }

    //this method will bring back the department list
    const goBackToDepList = async () => {
        setTrainings( [] )
    }

    useEffect( () => {}, [] )

    return (
        <>
            {
                trainings.length === 0 && <Grid container style={ { height:'100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' } } >

                {
                    departments && departments.sort().map( ( department, index ) => (
                        <Grid key={ index } item xl={4} lg={4} md={6} sm={6} xs={12} style={ { padding: '12px' } } onClick={ () => getTrainings( department ) }>
                            <Paper elevation={1} style={ { height: '25vh', display: 'flex', alignItems: 'center', justifyContent: "center", cursor: 'pointer' } }>
                                <h2>{ department }</h2>
                            </Paper>
                        </Grid>
                    ) )
                }

                </Grid>
            }
            {
                trainings.length > 0 && <Grid container style={ { height:'100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' } } >

                    <Grid item lg={5} xl={5} md={6} sm={6} xs={12}>

                           <Grid container justifyContent="center">

                                <Grid item xs={11}>
                                    <Button variant="contained" style={ { color: 'white', background: '#93c6ed', float: 'left', padding: '15px 10px' } }>Add Training</Button>
                                    <Button color="default" variant="contained" style={ { padding: '15px 10px', float: 'right' } } onClick={ goBackToDepList }>Go Back</Button>
                                </Grid>

                           </Grid>

                            <hr />
                            <br />

                            {
                                trainings.length > 0 &&  trainings.map( ( tr, index ) => (
                                    <Accordion key={ index }>
                                        <AccordionSummary>
                                           <Grid container>
                                               <Grid xs={4}>
                                                    <Typography variant={'h4'}>{ tr.name }</Typography>
                                               </Grid>
                                               <Grid xs={5}></Grid>
                                               <Grid xs={1}>
                                                    <Button variant="contained" style={ { color: 'white', background: '#86c979', float: 'right' } }>Edit</Button>
                                               </Grid>
                                               <Grid xs={1}></Grid>
                                               <Grid xs={1}>
                                                    <Button variant="contained" style={ { color: 'white', background: '#fc4c4c', float: 'right' } }>Remove</Button>
                                               </Grid>
                                           </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant={'body1'}>
                                                { tr.details }
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ) )
                            }

                    </Grid>

                </Grid>
            }
        </>
    )

}

export default TrainingsComponent