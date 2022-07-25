import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import StatisticGrid from "./components/StatisticGrid";
import DashboardTabs from "./components/DashboardTabs";
import PropTypes from "prop-types";
import axios from "../../axios";
import "./HomePage.scss"
import { useAlert } from "react-alert"


const navigationText = [
  {
    text: "Home",
    link: "/",
  }
];

const HomePage = ({ setNavigationText }) => {
  
  setNavigationText(navigationText);

  const alert = useAlert();

    // all amounts info states
    const [usersList, setUsersList] = useState([]);
    const [dashboardInfo, setDashboardInfo] = useState([]);


    //Fetching the users list from db
    useEffect(() => {
      const fecthUsers = async () => {
        try {
          let { data } = await axios.get("/api/users");
          setUsersList(data);
        } catch (error) {
          console.log(error);
        }
      };
      fecthUsers();
    }, []);
  
  //fetching all dashboard names from db
  useEffect(() => {
    const fecthUsers = async () => {
      try {
        let data = await axios.get("/api/dashboard");
        setDashboardInfo(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthUsers();
  }, []);


  
  return (
    <div className="homePage">
      <StatisticGrid usersAmount={usersList.length} dashboardsAmount={dashboardInfo.length} graphsAmount={usersList.length} />
      <div className="all fullWidth">

        <div class="whiteBlock">
            <div className="top flexedSpaced">
            Cylinder History
              <Link to="/" className="settingsBtn"><SettingsIcon /></Link>


            </div>
            <div class="innerContainer basicBlockSpaces">
              <DashboardTabs />
            </div>
        </div>


      </div>
    </div>
  );
};

export default HomePage;
