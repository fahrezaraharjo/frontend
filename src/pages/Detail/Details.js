import React, { useState } from 'react';
import './Details.css'
import CardDetail from "../../components/CardDetails/CardDetail"
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { MdOutlinePayments } from "react-icons/md"
import Modal from '../../components/modal/modal';

function Details(
    src,
    title,
    description,
) {
    const [openModal, setOpenModal] = useState(false);

    return (

        <div className='detailsPage'>
            <div className='detail_left'>

                <CardDetail
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />

            </div>
            <div className='searchResult_info'>
                <div className='card'>

                    <div className='searchResult_infoTop'>
                        <p>Private room in center of London</p>
                        <h3>Stay at this spacious Edwardian House</h3>
                        <p>____</p>
                        <p>1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine</p>
                        <div className='searchResult_stars'>
                            <StarIcon className="searchResult_star" />
                            <p>
                                <strong>4.73</strong>
                            </p>
                        </div>
                    </div>
                    <div className='searchResult_infoBottom'>
                        <h2>£30 / night</h2>
                        <p>£117 total</p>
                    </div>

                </div>

                <button
                    onClick={() => setOpenModal(true)}
                    className='modalButton'>
                    <div className="viewButton"><MdOutlinePayments />BOOK NOW</div>

                </button>
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)} />

            </div>
        </div >
    )
}

export default Details