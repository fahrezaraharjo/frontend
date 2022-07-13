import React from 'react'
import SideBar from '../../components/Admin/SideBar/SideBar'
import NavBar from '../../components/Admin/Navbar/NavBar'
import "./Admin.css";
import Widget from "../../components/Admin/Widget/Widget";
import Featured from "../../components/Admin/Featured/Featured";
import Chart from '../../components/Admin/Chart/Chart'
import Table from "../../components/Admin/Table/Table";



function HomeAdmin() {
    return (
        <div className="Admin">
            <SideBar />
            <div className="AdminContainer">
                <NavBar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin