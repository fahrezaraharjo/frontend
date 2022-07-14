import React, { useEffect, useState } from 'react'
import Axios from "axios"
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { hotelColumns, hotelRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { getHotels } from '../../../utils/api';

console.log(hotelRows)

const Datatable = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    getHotels().then(data => {
      const dataMapping = data.map(item => ({
        Address: item.address,
        Distance: item.distance,
        Price: item.price,
        city: item.city,
        id: item._id,
        name: item.name,
        status: "",
        title: item.title,
        type: item.type,
      }))
      setData(dataMapping)
    })
  }, []);


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/hotels/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="editButton"
              onClick={() => (params.row.id)}
            >
              Edit
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatable__Title">
        Add New hotel
        <Link to="/Hotels/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={hotelColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
