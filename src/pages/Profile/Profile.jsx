import React from 'react'
import "./profile.css"
import Me from "../../assets/eja-about.PNG"
import { AiOutlinePhone } from "react-icons/ai"
import { MdMarkEmailUnread } from "react-icons/md"
import { TbWallet } from "react-icons/tb"


const about = () => {
  return (
    <section id='about'>
      <h5>Welcome</h5>
      <h2>Fahreza</h2>

      <div className="countainer about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img className='imageprofile' src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__card">
            <article className='about__card'>
              <AiOutlinePhone className='about__icon' />
              <h5>(+62)82117897114</h5>
            </article>

            <article className='about__card'>
              <MdMarkEmailUnread className='about__icon' />
              <h5>Fahrezaraharjo92@gmail.com</h5>
              <small>-</small>
            </article>

            <article className='about__card'>
              <TbWallet className='about__icon' />
              <h5>My Bills</h5>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, minus in! Aperiam repellendus ad veritatis repellat at libero totam vel eveniet officia numquam voluptates aut, impedit modi corporis facilis odit?
          </p>

        </div>
      </div>  
    </section>
  )
}

export default about