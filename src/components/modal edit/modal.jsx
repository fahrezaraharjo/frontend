import React, { useEffect, useState } from 'react';
import './modal.css'
import { updateHotel } from '../../utils/api';
import { getHotel } from '../../utils/api';
import { useParams } from "react-router-dom";

const Modal = ({ open, onClose, data }) => {

  if (!open) return null;

  
  const [file, setFile] = useState("");
  const [values, setValues] = useState({
    nameHotel: "",
    type: "",
    city: "",
    address: "",
    rating: "",
    featured: "",
    desc: "",
    cheapestPrice: "",
    file: "",
    distance: "",
    title: "",
  });

  const [item, setItem] = useState({})
  let { id } = useParams();
  useEffect(() => {
    getHotel(id).then((data) => {
      console.log('ini dari backend', data)
      setItem(data)
    }).catch((err) => {
      console.log('gagal bro', err)
    })
  }, [])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    

    const { nameHotel, type, city, address, rating, featured, desc, cheapestPrice, file, distance, title } = values;
    const { data } = updateHotel({
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
  }
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };


  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className="new">
          <div className="modalContainer">
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
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
                <h1>edit information Hotel</h1>
                <form action='' className="button_submit" onSubmit={(event) => handleSubmit(event)}>
                  <div className="mb-2">

                  </div>
                  <div className="mb-2">
                   Name Hotel : <input
                      type="text"
                      value={data.name}
                      name="nameHotel"
                      onChange={(e) => handleChange(e)}
                    />

                  </div>

                  <div className="mb-2">
                   Type Hotel : <input
                      type="text"
                      value={data.type}
                      name="type"
                      onChange={(e) => handleChange(e)}
                    />

                  </div>

                  <div className="mb-2">
                   City : <input
                      type="text"
                      value={data.city}
                      name="city"
                      onChange={(e) => handleChange(e)}
                    />

                  </div>

                  <div className="mb-2">
                   Price : <input
                      type="number"
                      value={data.cheapestPrice}
                      name="cheapestPrice"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>


                  <div className="mb-2">
                   Title : <input
                      type="text"
                      value={data.title}
                      name="title"
                      onChange={(e) => handleChange(e)}
                    />

                  </div>


                  <div className="mb-2">
                   Upload Photo : <input
                      type="file"
                      value={data.photos}
                      name="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />

                  </div>



                  <button type='submit' className="btn btn-success">update</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Modal;