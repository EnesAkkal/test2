import React from "react";
import { useParams } from "react-router-dom";
import UserSideBar from "./UserSideBar.js";
import AccountSettings from "./AccountSettings.js";
import '../styles/UserProfile.css';

const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='userprofile'>
      
        {/* UserProfile , showing {activepage}
         */}

         <div className='userprofilein'>
            <div className='left'>
              <UserSideBar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
            </div>
         </div>
        </div>
  )
}

export default UserProfile