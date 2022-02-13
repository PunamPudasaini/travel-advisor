import React from "react";
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
import { InputBase,AppBar, Toolbar, Typography, Box } from "@material-ui/core";

export const Header = () => {
    const classes = useStyles();
    return(
       <AppBar position="static">
           <Toolbar className={classes.toolbar}>
               <Typography variant="h5" className={classes.title}>
                   Travel Advisor

               </Typography>
               <Box display="flex">
               <Typography variant="h6" className={classes.title}>
                  Explore new Places

               </Typography>
               {/* <Autocomplete > */}
                   <div className={classes.search}>
                       <div className={classes.searchIcon}>
                           <SearchIcon />

                       </div>
                       <InputBase placeholder="Search....."
                        classes={{root: classes.inputRoot, input: classes.inputInput}} />

                   </div>

               {/* </Autocomplete> */}

               </Box>

           </Toolbar>

       </AppBar>
    )
}