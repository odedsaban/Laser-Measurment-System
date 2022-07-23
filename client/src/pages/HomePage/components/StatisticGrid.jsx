import React, { useEffect } from "react";
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import TimelineIcon from '@material-ui/icons/Timeline';
import "./StatisticGrid.scss"


const StatisticGrid = (props) => {
  return (
    <div className="StatisticGrid">
        <div className="StatisticGridItem">
            <div className="icon">
                <GroupIcon />
            </div>
            <span className="data">
                {props.usersAmount}
            </span>
            <span className="text">
                test 1
            </span>
        </div>
        <div className="StatisticGridItem">
            <div className="icon">
                <DashboardIcon />
            </div>
            <span className="data">
                {props.dashboardsAmount}
            </span>
            <span className="text">
            test 2

            </span>
        </div>
        <div className="StatisticGridItem">
            <div className="icon">
                <TimelineIcon />
            </div>
            <span className="data">
                {props.graphsAmount}
            </span>
            <span className="text">
            test 3
            </span>
        </div>
    </div>
  );
};

export default StatisticGrid;
