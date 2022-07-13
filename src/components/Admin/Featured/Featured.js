import React from 'react'
import "./featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__top">
        <h1 className="featured__title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featured__bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="featured__amount">$420</p>
        <p className="featured__desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="featured__summary">
          <div className="featured__item">
            <div className="featured__itemTitle">Target</div>
            <div className="featured__itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="featured__resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="featured__item">
            <div className="featured__itemTitle">Last Week</div>
            <div className="featured__itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="featured__resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="featured__item">
            <div className="featured__itemTitle">Last Month</div>
            <div className="featured__itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="featured__resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
