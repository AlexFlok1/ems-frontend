import { Grid, Paper, TextField, Button, CircularProgress, Backdrop, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './LoginComponent.css'

const LoginComponent = () => {

    const history = useHistory()
    const [ loading, setLoading ] = useState();

    //method to login
    const logIn = async () => {

        //check access
        let response = await checkAccess();
        if( !response )
            alert('Sorry but you dont have access to it!')
        else{
            history.push('main')
        }


    }

    const checkAccess = async () => {
        console.log( 'Green light' )  // here will be db reuest to check badge id
        return true
    }

    useEffect( () => {}, [] )

    return (
        <>
            <Grid container className="c-flex" style={ { height: '100vh', background: '#edf7fc' } }>
                <Grid item xl={4} lg={4} md={5} sm={7} xs={10} className="c-flex">
                    <img src="mueller.png"  style={ { height: '10rem' } } />
                    <br/>
                    <Typography variant="h2">
                        WELCOME TO EMS
                    </Typography>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Paper elevation={1} style={ { width: '100%', padding: '15px 0px' } }>
                        <form>
                            <Grid container style={ { justifyContent: 'center' } }>
                                <Grid item xs={9}>
                                     <TextField label="Badge #" placeholder="Please Enter your Badge #" variant="outlined" fullWidth ></TextField>
                                </Grid>
                                <Grid item xs={5} style={ { padding: '10px 0px' } }>
                                    <Button style={ { color: 'white', background: '#73bd84' } } onClick={ logIn } fullWidth variant="contained">Log In</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>

                <Backdrop>

                </Backdrop>

            </Grid>
        </>
    )

}

export default LoginComponent