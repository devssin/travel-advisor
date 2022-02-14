import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Box, InputBase, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons'
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
      </Toolbar>
      <Box display="flex">
        <Typography variant="h6" className={classes.title}>
          Explore New Places
        </Typography>
      </Box>
      <Autocomplete>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          
        </div>
      </Autocomplete>
    </AppBar>
  );
};

export default Header;
