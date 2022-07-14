import React from 'react'
import Axios from 'axios';
import "./NewHotel.css";
import SideBar from '../../components/Admin/SideBar/SideBar';
import NavBar from '../../components/Admin/Navbar/NavBar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = (props) => {
  const [name, setName] = useState("")
  const [cheapestPrice, setCheapestPrice] = useState("")
  const [file, setFile] = useState("")
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
    setSpecies("")
    setFile("")
    const newPhoto = await Axios.post("/create-animal", data, { headers: { "Content-Type": "multipart/form-data" } })
    props.setAnimals(prev => prev.concat([newPhoto.data]))
  }

  return (
    <div className="new">
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="newtop">
          <h1>{title}</h1>
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
            <form className="p-3 bg-success bg-opacity-25 mb-5" onSubmit={submitHandler}>
              <div className="mb-2">
                <input ref={CreatePhotoField} onChange={e => setFile(e.target.files[0])} type="file" className="form-control" />
              </div>
              <div className="mb-2">
                <input onChange={e => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Hotel name" />
              </div>
              <div className="mb-2">
                <input onChange={e => setCheapestPrice(e.target.value)} value={cheapestPrice} type="text" className="form-control" placeholder="price" />
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
