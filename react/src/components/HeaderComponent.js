import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faUser, faEllipsisVertical, faMagnifyingGlass, faUsers, faComment as faCommentRegular, faEye as faEyeRegular, faUserLarge, faSign, faHome } from '@fortawesome/free-solid-svg-icons';
import { faBell, faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import '../styles/header.css';

function HeaderComponent() {

  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/';
  }

  const createPost = () =>   {
    window.location.href = '/createpost';
  }

  const profile = () =>   {
    window.location.href = '/user/accountsettings';
  }

  const home = () =>   {
    window.location.href = '/home';
  }

  const communityCreate = () =>   {
    window.location.href = '/community/create';
  }


  return (
    <header class="header" id="header">
            <div class="row">
              <div class="homefeed-container">
                <div class="header-content">
                  <div class="home">
                    <a onClick={home}> <FontAwesomeIcon icon={faHome}  className='home' /> </a>
                  </div>
                  <div class="nav-search">
                    <div class="form-group">
                      <input type="text" placeholder="Search For Communities"  />
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
                    </div>
                  </div>
                  <div class="nav-group">
                    <ul>
                      <li>
                        <a href="#"><FontAwesomeIcon icon={faBell} title="Notifications" /></a>
                      </li>
                      <li>
                      <a  class="createCommunity"> <FontAwesomeIcon icon={faUsers} onClick={communityCreate}/></a>
                      </li>
                      <li>
                        <a href="#"><FontAwesomeIcon icon={faPlusSquare} onClick={createPost} /></a>
                      </li>
                      <li class="join">
                        <a href="#">
                        <FontAwesomeIcon icon={faUser} onClick={profile} />
                        </a>
                      </li>
                      <li>
                        <a  class="logout"> <FontAwesomeIcon icon={faSignOut} onClick={handleLogout}/></a>
                      </li>
                      <li>
                        <a href="#"><FontAwesomeIcon icon={faEllipsisVertical} /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
  )
}

export default HeaderComponent;