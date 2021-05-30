import { Drawer, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
function Layout({ children }) {
  const drawWidth = 240;
  const history = useHistory();
  const location = useLocation();
  const useStyle = makeStyles((theme) => {
    return {
      page: {
        backgroundColor: "#f9f9f9",
        width: "100%",
        padding: theme.spacing(3),
      },
      drawer: {
        width: drawWidth,
      },
      drawPaper: {
        width: drawWidth,
      },
      root: {
        display: "flex",
      },
      active: {
        background: "#f5f5f5",
      },
      title: {
        padding: theme.spacing(2),
      },
      appBar: {
        width: `calc(100% - ${drawWidth}px)`,
      },
      date: {
        flexGrow: 1,
      },
      toolbar: theme.mixins.toolbar,
    };
  });
  const classes = useStyle();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* App Bar */}

      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.date}>{Date().toString()}</Typography>
          <Typography>Avisek</Typography>
        </Toolbar>
      </AppBar>
      {/* Side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <div>
          <Typography variant="h5"> Avisek's Notes</Typography>
        </div>
        {/* List Item */}
        <List>
          {menuItems?.map((item, index) => (
            <ListItem
              button
              onClick={() => {
                history.push(item?.path);
              }}
              key={index}
              className={
                location.pathname === item?.path ? classes.active : null
              }
            >
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
