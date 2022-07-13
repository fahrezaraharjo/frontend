import React from 'react'
import "./navbar.css";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Me from "../../../assets/eja-about.PNG"

function NavBar() {
    return (
        <div className="navbar">
          <div className="navbar__wrapper">
            
            <div className="navbar__items">
              <div className="navbar__item">
                <LanguageOutlinedIcon className="navbar__icon" />
                English
              </div>
              <div className="navbar__item">
                <DarkModeOutlinedIcon
                  className="navbar__icon"
                  onClick={() => ({ type: "TOGGLE" })}
                />
              </div>
              <div className="navbar__item">
                <FullscreenExitOutlinedIcon className="navbar__icon" />
              </div>
              <div className="navbar__item">
                <NotificationsNoneOutlinedIcon className="navbar__icon" />
                <div className="navbar__counter">1</div>
              </div>
              <div className="navbar__item">
                <ChatBubbleOutlineOutlinedIcon className="icon" />
                <div className="navbar__counter">2</div>
              </div>
              <div className="navbar__item">
                <ListOutlinedIcon className="navbar__icon" />
              </div>
              <div className="navbar__item">
                <img
                  src={Me}
                  alt=""
                  className="navbar__avatar"
                />
              </div>
            </div>
          </div>
        </div>
      );
}

export default NavBar