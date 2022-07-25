import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Tabs from '@material-ui/core/Tabs';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'

    /* Data Test */

  


function DashboardTabs({ }) {
    const [tabValue, setValue] = React.useState(0);

    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };
    function TabPanel(props) {
      const { children, value, index, ...other } = props;
    
      return (
        <div
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
    
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    };
    
    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }


  return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',alignItems:'center' }}>
            <div className="tabsContainer">
                <TabPanel value={tabValue} index={0}>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                Item Two
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                Item Three
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                Item Four
                </TabPanel>
                <TabPanel value={tabValue} index={4}>
                Item Five
                </TabPanel>
                <TabPanel value={tabValue} index={5}>
                Item Six
                </TabPanel>
                <TabPanel value={tabValue} index={6}>
                Item Seven
                </TabPanel>
            </div>

            <Tabs
            orientation="vertical"
            variant="scrollable"  style={{height: "236px"}}
            value={tabValue}
            onChange={handleChangeTab}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
        </Box>
 );
}

export default DashboardTabs;
