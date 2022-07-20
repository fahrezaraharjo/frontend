import React, { useEffect, useState } from 'react';
import './Details.css'
import Card from '../../components/Card/Card';
import StarIcon from "@mui/icons-material/Star";
import { useParams } from "react-router-dom";
import { MdOutlinePayments } from "react-icons/md"
import Modal from '../../components/modal/modal';
import { getHotel } from '../../utils/api';

function Details() {
    let { id } = useParams();
    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState({})

    useEffect(() => {
        getHotel(id).then((data) => {
            console.log('ini dari backend',data)
            setItem(data)
        }).catch((err) => {
            console.log('gagal bro',err)
        })
    }, [])

    return (

        <div className='detailsPage'>
            <div className='detail_left'>

                <Card
                    photos={item.photos ? item.photos[0] : 'err'}
                    title={item.title}
                   
                />

            </div>
            <div className='searchResult_info'>
                

                    <div className='searchResult_infoTop'>
                        <p>{item.title}</p>
                        <h3>{item.desc}</h3>
                        <p>____</p>
                        <p>1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine</p>
                        <div className='searchResult_stars'>
                            <StarIcon className="searchResult_star" />
                            <p>
                                <strong>{item.rating}</strong>
                            </p>
                        </div>
                    </div>
                    <div className='searchResult_infoBottom'>
                        <h2>Rp {item.cheapestPrice} / Night</h2>
                    </div>
                
                <button
                    onClick={() => setOpenModal(true)}
                    className='modalButton'>
                    <div className="viewButton">
                        <MdOutlinePayments />
                        <a>BOOK NOW</a>
                    </div>

                </button>
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                />

            </div>
        </div >
    )
}

export default Details