import React from 'react'
import "./NewHotel.css";
import SideBar from '../../components/Admin/SideBar/SideBar';
import NavBar from '../../components/Admin/Navbar/NavBar';
import { useState } from "react";
import { addHotel } from '../../utils/api';

const New = (inputs) => {
  const [file, setFile] = useState("");
  const [values, setValues] = useState({
    nameHotel: "",
    type: "",
    city: "",
    address: "",
    rating: "",
    // rooms: "",
    featured: "",
    desc: "",
    cheapestPrice: "",
    file: "",
    distance: "",
    title: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nameHotel, type, city, address, rating, featured, desc, cheapestPrice, file, distance, title } = values;
    const { data } = addHotel({
      nameHotel,
      type,
      city,
      address,
      rating,
      featured,
      desc,
      cheapestPrice,
      file,
      distance,
      title
    });

  };

  return (
    <div className="new">
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="newtop">
          <h1>Create NewHotel</h1>
        </div>
        <div className="newbottom">
          <div className="newleft">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="newright">
            <form action='' className="button_submit" onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-2">

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Name Hotel"
                  name="nameHotel"
                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  onChange={(e) => handleChange(e)}
                />

              </div>

              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Featured"
                  name="featured"
                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Description"
                  name="desc"
                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Cheapest Price"
                  name="cheapestPrice"
                  onChange={(e) => handleChange(e)}
                />


                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Distance"
                    name="distance"
                    onChange={(e) => handleChange(e)}
                  />

                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={(e) => handleChange(e)}
                  />

                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={(e) => handleChange(e)}
                  />

                </div>

                <div className="mb-2">
                  <input
                    type="file"
                    placeholder="Choose Photo"
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />

                </div>



                <button type='submit' className="btn btn-success">Create New Hotels!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
