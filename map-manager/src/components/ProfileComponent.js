import React from 'react'
import '../styles/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import pp1 from '../assets/pp1.jpg';

function ProfileComponent() {
  
  
    return (
    <div class="container-profile">
    <div class="card">
       <div class="card-header">
          <img src={pp1} alt="" class="user-img" />
       </div>
       <div class="card-content">
          <div class="description">
             <h1 class="name">Inferno1</h1>
             <p class="job">Member</p>
             <small class="location">Istanbul, Turkey</small>
          </div>
          <div class="button-1">
          <button type="button" class="btn btn-red"> <FontAwesomeIcon icon={faUserPlus} /> Connect</button>
          </div>
          <button type="button" class="btn btn-black">Report User</button>
       </div>
    </div>
 </div>
  )
}

export default ProfileComponent