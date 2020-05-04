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
        <Link to='/somewhere' className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            Inicio
          </Button>
        </Link>
      </ListItem>

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
            <Link to="/consultoria" className={classes.dropdownLink}>
              Consultoria
            </Link>,
            <Link to="/asesorias" className={classes.dropdownLink}>
              Asesorías
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to='/bolsadetrabajo' className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            <Work className={classes.icons} /> Bolsa de trabajo
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}> 
        <Link to='/nosotros' className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            Nosotros
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}> 
        <Link to='/contacto' className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}>
            Contacto
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Siguenos en instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color="transparent"
            href="https://www.instagram.com/alpacasofinstagram"
            target="_blank"
            className={classes.navLink}>
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      
    
    </List>
  );
}
