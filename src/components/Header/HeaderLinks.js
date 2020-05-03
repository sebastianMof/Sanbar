/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Work } from "@material-ui/icons";
import Business from '@material-ui/icons/Business';


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Servicios"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Business}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Consultoria
            </Link>,
            <a
              href="https://www.youtube.com/watch?v=o5fsi3e3tww"
              target="_blank"
              className={classes.dropdownLink}
            >
              Hosting
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.youtube.com/watch?v=o5fsi3e3tww"
          color="transparent"
          target="_blank"
          className={classes.navLink}
  
        >
          <Work className={classes.icons} /> Bolsa de trabajo
        </Button>
      </ListItem>
      
      
   
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
