import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../../styles/UserSideBar.css";

const UserSideBar = ({ activepage }) => {
  return (
    <>
    <div className='usersidebar'>
        {
        activepage === 'accountsettings' ?
          <div className='s2'>
                 <FontAwesomeIcon icon={faUser} />
            <span>AccountSettings</span>
          </div>

          :
          <Link
          to='/user/accountsettings'
          className='stylenone'

        >
          <div className='s1'>
          <FontAwesomeIcon icon={faUser} />
            <span>Account Settings</span>
          </div>
        </Link>
    
      }


      {
        activepage === 'changepassword' ?
          <div className='s2'>
              <FontAwesomeIcon icon={faLock} />
            <span>Change Password</span>
          </div>

          :
          <Link
            to='/user/changepassword' className='stylenone'>
            <div className='s1'>
            <FontAwesomeIcon icon={faLock} />
              <span>Change Password</span>
            </div>
          </Link>
      }

      {
        activepage === 'changemail' ?
          <div className='s2'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Change Email</span>
          </div>

          :
          <Link
            to='/user/changemail' className='stylenone'>
            <div className='s1'>
            <FontAwesomeIcon icon={faEnvelope} />
              <span>Change Email</span>
            </div>
          </Link>
      }

      {
        activepage === 'changenickname' ?

          <div className='s2'>
            

            <span>Display Name</span>
          </div>

          :
          <Link
            to='/user/changenickname' className='stylenone'>
            <div className='s1'>
            

              <span>Display Name</span>
            </div>
          </Link>
      }
    </div>
    </>
  )
}

export default UserSideBar