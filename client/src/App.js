import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//Import Components
import Header from "./Header";
import SideBar from "./SideBar";


//import pages
import HomePage from "./pages/HomePage/HomePage.jsx";
import { ProcessFactory } from "./pages/processes/ProcessFactory";


//import styles
import "././style/pages/pagesGlobalStyles.scss";

function App() {
  
  const [userInfo, setUserInfo] = useState(null);
  const [navigationText, setNavigationText] = useState([
    {
      text: "Homer",
      link: "/",
    },
  ]);
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);


  // optional alerts cofiguration
const alertsOptions = {
  position: 'bottom right',
  timeout: 5000,
  offset: '30px',
  transition: 'fade'
}

  return (
    
    <div>
      <Provider template={AlertTemplate} {...alertsOptions}>
      {
        <BrowserRouter>
          <div className={"App " + (isSideBarVisible ? "sideBarVisible" : "")}>
            <SideBar />
            <div class="pageContainer">
              <Header
                isSideBarVisible={isSideBarVisible}
                onToggleSideBar={setIsSideBarVisible}
              />
              <div className="entirePager fullWidth">
                <div className="breadCrumbs">
                  <ul className="flexed">
                    {navigationText.map((page) => (
                      <li>
                        <Link to={page.link}>{page.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="main">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={() => (
                        <HomePage setNavigationText={setNavigationText} />
                      )}
                    />
                    <Route
                      exact
                      path="/process/processCreating"
                      component={() => (
                        <ProcessFactory setNavigationText={setNavigationText} />
                      )}
                    />

                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      }
      </Provider>
    </div>
  );
}

export default App;
