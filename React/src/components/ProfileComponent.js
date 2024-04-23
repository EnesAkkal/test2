import React from 'react'
import Style from '../styles/profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import pp1 from '../assets/pp1.jpg';

function ProfileComponent() {
  
  
    return (
    <div className= {Style.containerProfile}>
    <div className={Style.card} >
       <div className={Style.cardHeader} >
          <img src={pp1} alt="" className="user-img" />
       </div>
       <div className={Style.cardContent}>
          <div className={Style.description}>
             <h1 className="name">Inferno1</h1>
             <p className="job">Member</p>
             <small className="location">Istanbul, Turkey</small>
          </div>
          <div className={Style.button1}>
          <button type="button" className="btn btn-red"> <FontAwesomeIcon icon={faUserPlus} /> Connect</button>
          </div>
          <button type="button" className="btn btn-black">Report User</button>
       </div>
    </div>
 </div>
  )
}

export default ProfileComponent
