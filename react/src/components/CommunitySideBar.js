import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import "../styles/UserSideBar.css";

const CommunitySideBar = ({ activepage }) => {
  return (
    <>
    <div className='usersidebar'>
        {
        activepage === 'kickuser' ?
          <div className='s2'>
                 <FontAwesomeIcon icon={faUser} />
            <span>Kickuser</span>
          </div>

          :
          <Link
          to='/community/settings/kickuser'
          className='stylenone'

        >
          <div className='s1'>
          <FontAwesomeIcon icon={faUser} />
            <span>Kick User</span>
          </div>
        </Link>
    
      }


      {
        activepage === 'transferownership' ?
          <div className='s2'>
              <FontAwesomeIcon icon={faLock} />
            <span>Transfer Ownership</span>
          </div>

          :
          <Link
            to='/community/settings/transferownership' className='stylenone'>
            <div className='s1'>
            <FontAwesomeIcon icon={faLock} />
              <span>Transfer Ownership</span>
            </div>
          </Link>
      }

{
        activepage === 'roles' ?
          <div className='s2'>
              <FontAwesomeIcon icon={faLock} />
            <span>Assign Community Moderators</span>
          </div>

          :
          <Link
            to='/community/settings/roles' className='stylenone'>
            <div className='s1'>
            
              <span>Assign Community Moderators</span>
            </div>
          </Link>
      }

      {
        activepage === 'inviteusers' ?

          <div className='s2'>
            

            <span>Invite Users</span>
          </div>

          :
          <Link
            to='/community/settings/invite' className='stylenone'>
            <div className='s1'>
            

              <span>Invite Users</span>
            </div>
          </Link>
      }
    </div>
    </>
  )
}

export default CommunitySideBar