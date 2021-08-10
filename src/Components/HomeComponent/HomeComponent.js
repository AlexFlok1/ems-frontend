import { Grid, Paper, Button, Snackbar, ListItem, ListItemIcon, ListItemText, Avatar } from '@material-ui/core'
import { HomeOutlined, PersonOutlineOutlined, LibraryBooksOutlined, ExitToAppOutlined } from '@material-ui/icons'
import { useState } from 'react'

//Other Components
import DashboardComponent from '../DashboardComponent/DashboardComponent'
import EmployeesComponent from '../EmployeesComponent/EmployeesComponent'
import TrainingsComponent from '../TrainingsComponent/TrainingsComponent'

import './HomeComponent.css'

const HomeComponent = () => {

    const [ menu ] = useState( [ 'Home', 'Employees', 'Trainings', 'Logout' ] )
    const [ selection, setSelection ] = useState('Home');

    const renderMenuIcon = ( item ) => {

        switch( item ){
            case 'Home':
                return <HomeOutlined />
            case 'Employees':
                return <PersonOutlineOutlined />
            case 'Trainings':
                return <LibraryBooksOutlined />
            case 'Logout':
                return <ExitToAppOutlined />
        }

    }

    const renderMenuItemComponent = () => {

            switch( selection ){
                case 'Home':
                    return <DashboardComponent />
                 case 'Employees':
                    return <EmployeesComponent />
                 case 'Trainings':
                    return <TrainingsComponent />
            }

    }

    //function to select menu item
    const selectMenuItem = ( selection ) => {

        setSelection( selection )

    }

    return (
        <>
            <Grid container style={ { height: '100vh' } }>
                <Grid item xl={2} lg={2} md={3} style={ { padding: '0 10px' } }>
                    <Paper elevation={1} style={ { height: '95vh', marginTop: '2.5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' } }>
                        <div className="user-icon">
                            <Avatar alt="Alex Flok" style={ { width: '8rem', height: '8rem' } }></Avatar>
                        </div>
                        <span className="user-name">
                            Alex Flok
                        </span>
                        {
                            menu && menu.map( ( item, index ) => (
                                <ListItem key={ index } className={ ( selection === item ) ? 'menu-btn menu-btn-active' : 'menu-btn' } onClick={ () => { selectMenuItem( item ) } } >
                                    <ListItemIcon style={ { color: ( selection === item ) ? 'white' : '' } }>
                                        { renderMenuIcon( item ) }
                                    </ListItemIcon>
                                    <ListItemText>
                                         { item }
                                    </ListItemText>
                                </ListItem>
                            ) )
                        }
                    </Paper>
                </Grid>
                <Grid item xl={10} lg={10} md={9} style={ { padding: '0 10px', height: '100vh', overflowY: 'scroll' } }>
                        {
                            selection && renderMenuItemComponent()
                        }
                </Grid>
            </Grid>
        </>
    )

}

export default HomeComponent