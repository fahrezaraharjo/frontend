import React from 'react'

import "./list.css"
import SideBar from '../../components/Admin/SideBar/SideBar'
import NavBar from '../../components/Admin/Navbar/NavBar'
import Datatable from '../../components/Admin/DataTableHotel/Datatable'
const List = (props) => {
console.log(props.columns)
  return (
    <div className="list">
      <SideBar/>
      <div className="listContainer">
        <NavBar/>
        <Datatable />
      </div>
    </div>
  )
}

export default List