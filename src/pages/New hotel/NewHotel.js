import React from 'react'
import Axios from 'axios';
import "./NewHotel.css";
import SideBar from '../../components/Admin/SideBar/SideBar';
import NavBar from '../../components/Admin/Navbar/NavBar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef } from "react";

const New = (props) => {
  const [nameHotel, setName] = useState("")
  const [type, setType] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [rating, setRating] = useState("")
  const [rooms, setRooms] = useState("")
  const [featured, setFeatured] = useState("")
  const [desc, setDesc] = useState("")
  const [cheapestPrice, setCheapestPrice] = useState("")
  const [file, setFile] = useState("")
  const [distance, setDistance] = useState("")
  const [title, setTitle] = useState("")


  const CreatePhotoField = useRef()

  async function submitHandler(e) {
    e.preventDefault()
    const data = new FormData()
    data.append("name", nameHotel)
    data.append("photo", file)
    data.append("type", type)
    data.append("city", city)
    data.append("address", address)
    data.append("rating", rating)
    data.append("rooms", rooms)
    data.append("cheapestPrice", cheapestPrice)
    data.append("featured", featured)
    data.append("desc", desc)
    data.append("distance", distance)
    data.append("photo", file)
    data.append("title", title)

    setName("")
    setCheapestPrice("")
    setFile("")
    setTitle("")
    setDistance("")
    setDesc("")
    setFeatured("")
    setRooms("")
    setRating("")
    setAddress("")
    setCity("")
    setType("")

    const newPhoto = await Axios.post("/create-animal", data, { headers: { "Content-Type": "multipart/form-data" } })
    props.setAnimals(prev => prev.concat([newPhoto.data]))
  }

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
            <form className="button_submit" onSubmit={submitHandler}>
              <div className="mb-2">
                <input ref={CreatePhotoField} onChange={e => setFile(e.target.files[0])} type="file" className="form-control" />
              </div>
              <div className="mb-2">
                <input onChange={e => setName(e.target.value)} value={nameHotel} type="text" className="form-control" placeholder="Hotel name" />
              </div>
              <div className="mb-2">
                <input onChange={e => setCheapestPrice(e.target.value)} value={cheapestPrice} type="text" className="form-control" placeholder="Price" />
              </div>
              <div className="mb-2">
                <input onChange={e => setTitle(e.target.value)} value={title} type="text" className="form-control" placeholder="Title" />
              </div>
              <div className="mb-2">
                <input onChange={e => setDistance(e.target.value)} value={distance} type="text" className="form-control" placeholder="Distance" />
              </div>
              <div className="mb-2">
                <input onChange={e => setDesc(e.target.value)} value={desc} type="text" className="form-control" placeholder="Description Hotel" />
              </div>
              <div className="mb-2">
                <input onChange={e => setRooms(e.target.value)} value={rooms} type="text" className="form-control" placeholder="Rooms" />
              </div>
              <div className="mb-2">
                <input onChange={e => setAddress(e.target.value)} value={address} type="text" className="form-control" placeholder="Address" />
              </div>
              <div className="mb-2">
                <input onChange={e => setCity(e.target.value)} value={city} type="text" className="form-control" placeholder="City" />
              </div>
              <div className="mb-2">
                <input onChange={e => setType(e.target.value)} value={type} type="text" className="form-control" placeholder="type room" />
              </div>

              <button className="btn btn-success">Create New Hotels!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
