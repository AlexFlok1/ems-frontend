import { Grid, Paper, Card, CardMedia, CardActionArea, CardContent, Button, TextField, CardActions, Avatar, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'

import './EmployeesComponent.css'


const EmployeesComponent = () => {

    const [ employees, setEmployees ] = useState( [] )

    //this method will upload all employees from db
    const getEmployeesinfo = async () => {
        
        setEmployees( [
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            },
            {
                name: 'Test1',
                position: 'QA Team',
                hiredDate: '01/01/2021'
            }
        ] )

    }

    useEffect( () => {

        getEmployeesinfo();

    }, [] )
 
    return (
        <>
            <Grid container style={ { height:'100vh', justifyContent: 'center' } }>
                <Grid item xs={4}>
                    <Paper elevation={1} style={ { padding: '15px 10px', marginTop: '2.5vh' } }>
                        <TextField  variant="outlined" label={"Search Employee"} placeholder="Please enter Name or Badge#" fullWidth />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <br></br>
                    <Grid container>
                        
                        {
                            employees && employees.map( ( employee, index ) => (
                                <Grid key={ index } item xs={4} lg={4} md={6} style={ { padding: '15px', minHeight:'15vh' } }>
                                    <Card >
                                        <CardActionArea>

                                            <CardMedia style={ { padding: '10px', justifyContent: 'center', display: 'flex' } }>
                                                <Avatar style={ { height: '8rem', width: '8rem' } }>

                                                </Avatar>
                                            </CardMedia>

                                            <CardContent>

                                                <Typography gutterBottom variant="h4" >
                                                    { employee.name }
                                                </Typography>
                                                <Typography gutterBottom variant="subtitle2">
                                                    { employee.position }
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    This employee was hired on <b style={ { color: 'black' } }>{ employee.hiredDate }</b>
                                                </Typography>

                                            </CardContent>

                                        </CardActionArea>

                                        <CardActions>
                                            <Button style={ { background: '#86c979', color:'white' } } variant="contained" >Edit</Button>
                                        </CardActions>

                                    </Card>
                                </Grid>
                            ) )
                        }

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
    
} 

export default EmployeesComponent