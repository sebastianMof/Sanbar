import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import ComputerIcon from '@material-ui/icons/Computer';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
          Empresa joven, innovación, metodologías ágiles, tecnología RFID,
          automatización de procesos, visibilización de KPIs, Desarrollo 
          móvil híbrido (iOS, Android), IoT, Aplicaciones web.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Desarrollo"
              description=""
              icon={Code}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Aplicaciones móvilas híbridas"
              description=""
              icon={PhoneIphoneIcon}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="KPIs"
              description="Indicadores de desempeño para tu empresa."
              icon={ComputerIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
