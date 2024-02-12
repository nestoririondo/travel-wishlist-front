import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "./Grid";
import BasicSelect from "./Select";
import Card from "./Card";
import BasicTextFields from "./PostCountry";
import { useState } from "react";
import "../styles/Tabs.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="content"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CountryTabs() {
  const [value, setValue] = React.useState(0);
  const [country, setCountry] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ paddingLeft: "2rem", borderBottom: 2, borderColor: "#8CB9BD" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab style={{color: "#8CB9BD"}} label="All countries" {...a11yProps(0)} />
            <Tab style={{color: "#8CB9BD"}} label="Single country" {...a11yProps(1)} />
            <Tab style={{color: "#8CB9BD"}} label="Post new country" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Grid />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <BasicSelect country={country} setCountry={setCountry} />
          <Card country={country} />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <BasicTextFields />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
