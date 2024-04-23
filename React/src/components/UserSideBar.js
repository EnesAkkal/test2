import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/UserSideBar.css';

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
        activepage === 'yourorders' ?
          <div className='s2'>
            
            <span>Change Email</span>
          </div>

          :
          <Link
            to='/user/yourorders' className='stylenone'>
            <div className='s1'>
             

              <span>Change Email</span>
            </div>
          </Link>
      }

      {
        activepage === 'address' ?

          <div className='s2'>
            
            <span>Ignored Users</span>
          </div>
          :
          <Link
            to='/user/address' className='stylenone'>
            <div className='s1'>
             
              <span>Ignored Users</span>
            </div>

          </Link>
      }
      {
        activepage === 'legalnotice' ?

          <div className='s2'>
            

            <span>Display Name</span>
          </div>

          :
          <Link
            to='/user/legalnotice' className='stylenone'>
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