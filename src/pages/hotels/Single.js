import React from 'react'
import "./single.css";
import SideBar from '../../components/Admin/SideBar/SideBar';
import NavBar from '../../components/Admin/Navbar/NavBar';
import Chart from '../../components/Admin/Chart/Chart';
import List from '../List/List';
import Me2 from '../../assets/art-deco-luxury-hotel.jpg'

const Single = () => {
  
  return (
    <div className="single">
      <SideBar />
      <div className="single_Container">
        <NavBar />
        <div className="single_top">
          <div className="single_left">
            <div className="single_editButton">Edit</div>
            <h1 className="single_title">Information</h1>
            <div className="single_item">
              <img
                src={Me2}
                alt=""
                className="single_itemImg"
              />
              <div className="single_details">
                <h1 className="single_itemTitle">Art Deco</h1>
                <div className="single_detailItem">
                  <span className="single_itemKey">Email:</span>
                  <span className="single_itemValue">artDecobdg@gmail.com</span>
                </div>
                <div className="single_detailItem">
                  <span className="single_itemKey">Phone:</span>
                  <span className="single_itemValue">+1 2345 67 89</span>
                </div>
                <div className="single_detailItem">
                  <span className="single_itemKey">Address:</span>
                  <span className="single_itemValue">
                  Jl. Rancabentang No.2, Ciumbuleuit, Kec. Cidadap, Kota Bandung, Jawa Barat 40141
                  </span>
                </div>
                <div className="single_detailItem">
                  <span className="single_itemKey">Country:</span>
                  <span className="single_itemValue">Indonesia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="single_right">
            <Chart aspect={2 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="single_bottom">
        <h1 className="single_title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
