import React from 'react';
import {AppBar, CssBaseline, Toolbar, IconButton, Container, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


import SideDrawer from './Drawer';

function NavBar(){

    const [toggle,setToggle] = React.useState(false);

    const handleDrawer = () =>{
        setToggle(!toggle);
    }

    return(
        <CssBaseline>
            <AppBar>
                <Toolbar>
                    <IconButton
                    color='inherit'
                    size='medium'
                    edge='start'
                    onClick={handleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Container>
                        <Typography align='center'>
                           RECORD MANAGEMENT SYSTEM
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
            <SideDrawer drawerState={toggle} drawerAction={handleDrawer}/>
        </CssBaseline>
    );
}

export default NavBar;