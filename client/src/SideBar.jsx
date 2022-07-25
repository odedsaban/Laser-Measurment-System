import React, { useState, useEffect } from "react";

import "./style/sidebar.scss";
import { Link } from "react-router-dom";
//Import icons
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import AddIcon from "@material-ui/icons/Add";

import axios from "././axios";
const SideBar = () => {
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const [toggleUsers, setToggleUsers] = useState(false);

  const [dashboardInfo, setDashboardInfo] = useState([]);


  return (
    <div className="sidebar">
      <div className="headToggle">
        <Link to="/" className="textSideIcon">
          <HomeIcon className="icon" />
          Home
        </Link>
      </div>

      <div className="headToggle">
        <Link to="/process/processCreating" className="textSideIcon">
          <AddIcon className="icon" />
          Process Creating
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
