import React, { useState, useEffect } from 'react'
import "./EditHotel.css";
import SideBar from '../../components/Admin/SideBar/SideBar';
import NavBar from '../../components/Admin/Navbar/NavBar';
import { getHotel, updateHotel } from '../../utils/api';
import { useParams } from "react-router-dom";


const Edit = () => {

  let { id } = useParams();

  const [file, setFile] = useState("");
  const [values, setValues] = useState({

    name: "",
    type: "",
    city: "",
    address: "",
    rating: "",
    featured: "",
    desc: "",
    cheapestPrice: "",
    distance: "",
    title: "",
    photos: ""
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    getHotel(id).then((data) => {
      setValues(data)
    }).catch((err) => {
    })
  }, [])





  const handleSubmit = async (event) => {
    event.preventDefault();
console.log(values, "ieu submit")
    const { _id, name, type, city, address, rating, featured, desc, cheapestPrice, file, distance, title } = values;
    const { data } = updateHotel(_id,{
      name,
      type,
      city,
      address,
      rating,
      featured,
      desc,
      cheapestPrice,
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
          <h1>Edit Hotel</h1>
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
                  name="name"
                  value={values.name}
                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  value={values.type}
                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={values.address}

                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  value={values.rating}

                  onChange={(e) => handleChange(e)}
                />

              </div>

              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Featured"
                  name="featured"
                  value={values.featured}

                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Description"
                  name="desc"
                  value={values.desc}

                  onChange={(e) => handleChange(e)}
                />

              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Cheapest Price"
                  name="cheapestPrice"
                  value={values.cheapestPrice}

                  onChange={(e) => handleChange(e)}
                />


                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Distance"
                    name="distance"
                    value={values.distance}

                    onChange={(e) => handleChange(e)}
                  />

                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={values.title}

                    onChange={(e) => handleChange(e)}
                  />

                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}

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



                <button type='submit' className="btn btn-success">Update Hotels!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;