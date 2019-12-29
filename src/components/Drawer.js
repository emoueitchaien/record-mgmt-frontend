import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { Divider, Typography } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const drawerWidth = 150;
const useStyle = makeStyles({
  root: { display: "flex" },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  iconSpacing: {
    marginLeft: 20,
    marginTop: 10,
    color: "black"
  }
});

function SideDrawer(props) {
  const classes = useStyle();

  return (
    <Drawer
      variant="persistent"
      className={classes.root}
      open={props.drawerState}
      classes={{ paper: classes.drawer }}
    >
      <MenuItem onClick={props.drawerAction}>
        <ChevronLeftIcon />
      </MenuItem>
      <Divider />
      <MenuItem onClick={props.drawerAction} component={Link} to={"/"}>
        <Typography className={classes.iconSpacing}>Home</Typography>
      </MenuItem>

      <MenuItem onClick={props.drawerAction} component={Link} to={"/sp"}>
        <Typography className={classes.iconSpacing}>Export</Typography>
      </MenuItem>
      <MenuItem onClick={props.drawerAction} component={Link} to={"/cp"}>
        <Typography className={classes.iconSpacing}>Import</Typography>
      </MenuItem>

      <MenuItem onClick={props.drawerAction} component={Link} to={"/search"}>
        <Typography className={classes.iconSpacing}>Search</Typography>
      </MenuItem>

      <MenuItem onClick={props.drawerAction} component={Link} to={"/calculate"}>
        <Typography className={classes.iconSpacing}>Calculate</Typography>
      </MenuItem>
    </Drawer>
  );
}

export default SideDrawer;
