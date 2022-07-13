import React from 'react';
import './modal.css'
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src="https://cdn.infobrand.id/images/img/posts/2018/05/17/begini-strategi-marketing-digital-bank-bca.png" alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>BCA Virtual</p>
            <h1>Rp 9999999 </h1>
            <p>Kode Book</p>
            <p>322003218495131</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, done
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;