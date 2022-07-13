import React from 'react'
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";


function SideBar() {



    return (
        <div className="sidebar">
            <div className="sidebar__top">
                
                    <span className="sidebar__logo">Admin AFv</span>
                
            </div>
            <hr />
            <div className="sidebar__center">
                <ul>
                    <p className="sidebar__title">MAIN</p>
                    <Link to="/admin" style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className="sidebar__icon" />
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <p className="sidebar__title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="sidebar__icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/Hotels" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="sidebar__icon" />
                            <span>Hotels</span>
                        </li>
                    </Link>
                    <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Rooms</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

                    <p className="sidebar__title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="sidebar__icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="sidebar__icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="sidebar__title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="sidebar__icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="sidebar__icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="sidebar__icon" />
                        <span>Settings</span>
                    </li>
                    <p className="sidebar__title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="sidebar__icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="sidebar__icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar__bottom">
                <div
                    className="sidebar__colorOption"
                    onClick={() => ({ type: "LIGHT" })}
                ></div>
                <div
                    className="sidebar__colorOption"
                    onClick={() => ({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
}

export default SideBar