import React from 'react';
import './modal.css'
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay__payment'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modal__Container'
      >
        <img src="https://cdn.infobrand.id/images/img/posts/2018/05/17/begini-strategi-marketing-digital-bank-bca.png" alt='/' />
        <div className='modal__Right'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content__payment'>
            <p>BCA Virtual</p>
            <h1>Rp 9999999 </h1>
            <p>Kode Book</p>
            <p>322003218495131</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, done
            </button>
            <button className='btnOutline' onClick={onClose}>
              <span className='bold' >NO</span>,close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;