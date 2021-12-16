import React, {useState, useEffect} from 'react'
import {AppBar, Avatar, Button, Typography, Toolbar} from '@material-ui/core'
import {Link, useNavigate, useLocation} from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import memories from '../../images/memories.png';
import { LOGOUT } from '../../constants/actionTypes';

function Navbar() {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const Location = useLocation()


    const logout =() => {
        dispatch ({ type: 'LOGOUT'})
        Navigate('/')
        setUser(null);
    }    

    useEffect(() =>{
        const token = user?.token;
        
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [Location]);
    return (
       

     <AppBar className={classes.appBar} position="static" color="inherit">
        <div className ={classes.brandContainer}>
            <Typography  className={classes.heading} variant="h3" align="center">Smart Aquarium</Typography>
        </div>
        <Toolbar className={classes.Toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes}alt ={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h5"> Hello,{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout}color ="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component ={Link} to="/" variant="contained" color="primary">Sign in</Button>
            )}
        </Toolbar>
        
      </AppBar>
    )
}

export default Navbar
