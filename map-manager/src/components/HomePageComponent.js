import { request, setAuthHeader } from '../helpers/axios_helper.js';
import React, {  Component } from 'react';
import ProfileComponent from './ProfileComponent.js';
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser, faEllipsisVertical, faMagnifyingGlass, faArrowRight, faComment as faCommentRegular, faEye as faEyeRegular, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faEye, faBell, faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import pp1 from '../assets/pp1.jpg';
import pp2 from '../assets/pp2.png';
import FooterComponent from './FooterComponent.js';




class HomePageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: { username: '', email: '', password: '' },
            signUpMode: true,
            error: null,
        };
    }

    handleFormToggle = () => {
        this.setState(prevState => ({
            signUpMode: !prevState.signUpMode,
            error: null
        }));
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            formData: { ...prevState.formData, [name]: value }
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.signUpMode) {
            this.register();
        } else {
            this.login();
        }
    };

    login = () => {
        request("POST", "/login", this.state.formData)
            .then(response => {
                setAuthHeader(response.data.token);
                this.setState({ error: null });
            })
            .catch(error => {
                setAuthHeader(null);
                this.setState({ error: "Invalid username or password" });
            });
    };

    register = () => {
        if (!this.state.formData.username || !this.state.formData.email || !this.state.formData.password) {
            this.setState({ error: "Please fill in all fields" });
            return;
        }
        request("POST", "/register", this.state.formData)
            .then(response => {
                setAuthHeader(response.data.token);
                this.setState({ error: null });
            })
            .catch(error => {
                setAuthHeader(null);
                this.setState({ error: "Registration failed" });
            });
    };

    render() {
        return (
          <><header class="header" id="header">
            <div class="row">
              <div class="homefeed-container">
                <div class="header-content">
                  <div class="logo">
                    <a href="register.html"
                    ><img src="" alt="logo" /></a>
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
                        <a href="#"><FontAwesomeIcon icon={faPlusSquare} /></a>
                      </li>
                      <li class="join">
                        <a href="#">
                        <FontAwesomeIcon icon={faUser} />
                        </a>
                      </li>
                      <li>
                        <a href="#"><FontAwesomeIcon icon={faEllipsisVertical} /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header><main>
              <div class="homefeed-container">
                <div class="row">
                  <section class="left">
                    <h2>Recommended posts for you</h2>
                    <div class="posts_head">
                      <div class="posts_topic">Topic</div>
                      <div class="posts_category">Category</div>
                      <div class="posts_replies">Replies</div>
                      <div class="posts_views">Views</div>
                      <div class="posts_posts">Last Reply</div>
                    </div>
                    <div class="inner-left">
                      <div class="posts_head1">
                        <div class="posts_topic">
                          <h3>Which movie have you watched most recently?</h3>
                        </div>
                        <div class="posts_category">
                          <p>technical discussion</p></div>
                        <div class="posts_replies">77</div>
                        <div class="posts_views">1500</div>
                        <div class="posts_posts">15 mins ago</div>
                      </div>
                      <div class="posts_head1">
                        <div class="posts_topic">
                          <h3>Which movie have you watched most recently?</h3>
                        </div>
                        <div class="posts_category">
                          <p>technical discussion</p></div>
                        <div class="posts_replies">77</div>
                        <div class="posts_views">1500</div>
                        <div class="posts_posts">15 mins ago</div>
                      </div>
                      <div class="posts_head1">
                        <div class="posts_topic">
                          <h3>Which movie have you watched most recently?</h3>
                        </div>
                        <div class="posts_category">
                          <p>technical discussion</p></div>
                        <div class="posts_replies">77</div>
                        <div class="posts_views">1500</div>
                        <div class="posts_posts">15 mins ago</div>
                      </div>
                      <div class="posts_head1">
                        <div class="posts_topic">
                          <h3>Which movie have you watched most recently?</h3>
                        </div>
                        <div class="posts_category">
                          <p>technical discussion</p></div>
                        <div class="posts_replies">77</div>
                        <div class="posts_views">1500</div>
                        <div class="posts_posts">15 mins ago</div>
                      </div>
                      <div class="posts_head1">
                        <div class="posts_topic">
                          <h3>Which movie have you watched most recently?</h3>
                        </div>
                        <div class="posts_category">
                          <p>technical discussion</p></div>
                        <div class="posts_replies">77</div>
                        <div class="posts_views">1500</div>
                        <div class="posts_posts">15 mins ago</div>
                      </div>
                    </div>
                    <ProfileComponent/>
                  </section>
                  <section class="right">
                    <div class="box first">
                      <h3>honda shadow forums</h3>
                      <span>since 2007</span>
                      <p>
                        Welcome to Honda Shadow Forum. Come in and discuss any Honda
                        Shadow models: VT1100, VT250, VT750 and the VT500.
                      </p>
                      <div class="stats">
                        <div>
                          <h4>1.6M</h4>
                          <span>posts</span>
                        </div>
                        <div>
                          <h4>79.4k</h4>
                          <span>members</span>
                        </div>
                      </div>
                      <div class="buttons">
                        <a href="#" class="btn btn-red"
                        ><FontAwesomeIcon icon={faUserLarge} /> join community</a>

                      </div>
                    </div>
                    <div class="box top-forums">
                      <h3>our top forums</h3>
                      <a href="#">View All  <FontAwesomeIcon icon={faArrowRight} /></a>
                      <div class="inner-box">
                        <h4><a href="#">general bike discussion</a></h4>
                        <div class="stats">
                          <div class="stat comments">
                          <FontAwesomeIcon icon={faComment}/> <span> 709.4k</span>
                          </div>
                          <div class="stat views">
                          <FontAwesomeIcon icon={faEye} /> <span>104.4M</span>
                          </div>
                        </div>
                      </div>
                      <div class="inner-box">
                        <h4><a href="#">technical discussion</a></h4>
                        <div class="stats">
                          <div class="stat comments">
                          <FontAwesomeIcon icon={faComment}/> <span> 395.7k</span>
                          </div>
                          <div class="stat views">
                          <FontAwesomeIcon icon={faEye} /><span>124.2M</span>
                          </div>
                        </div>
                      </div>
                      <div class="inner-box">
                        <h4><a href="#">member introductions</a></h4>
                        <div class="stats">
                          <div class="stat comments">
                          <FontAwesomeIcon icon={faComment}/> <span> 178.9k</span>
                          </div>
                          <div class="stat views">
                          <FontAwesomeIcon icon={faEye} /><span>22.1M</span>
                          </div>
                        </div>
                      </div>
                      <div class="inner-box" >
                        <h4><a href="#">rides and events</a></h4>
                        <div class="stats">
                          <div class="stat comments">
                          <FontAwesomeIcon icon={faComment}/><span> 5.3k</span>
                          </div>
                          <div class="stat views">
                          <FontAwesomeIcon icon={faEye} /><span>1.6M</span>
                          </div>
                        </div>
                      </div>
                      <div class="inner-box">
                        <h4><a href="#">canadian riders</a></h4>
                        <div class="stats">
                          <div class="stat comments">
                          <FontAwesomeIcon icon={faComment}/> <span> 4.2k</span>
                          </div>
                          <div class="stat views">
                          <FontAwesomeIcon icon={faEye} /><span>1.1M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="box top-contributors">
                      <h3>top contributors this month</h3>
                      <a href="#">View All <FontAwesomeIcon icon={faArrowRight} /></a>
                      <div class="inner-box">
                        <div class="img">
                          <img src={pp1} alt="" />
                        </div>
                        <div class="details">
                          <a href="#">Captain D</a>
                          <span>202 replies</span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="img">
                          <img src={pp1} alt="" />
                        </div>
                        <div class="details">
                          <a href="#">oldguy</a>
                          <span>196 replies</span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="img">
                          <img src={pp1} alt="" />
                        </div>
                        <div class="details">
                          <a href="#">Inferno</a>
                          <span>174 replies</span>
                        </div>
                      </div>
                    </div>
                    <div class="box recommended-communities">
                      <h3>recommended communities</h3>
                      <div class="inner-box">
                        <div class="img">
                          <img src={pp2} alt="" />
                        </div>
                        <div class="details">
                          <a href="#">Jeep Forum</a>
                          <span>718k+ members</span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="img">
                          <img src={pp2} alt="" />
                        </div>
                        <div class="details">
                          <a href="#">VWVortex Volkswagen Forum</a>
                          <span>2M+ members</span>
                        </div>
                      </div>
                      <div class="inner-box">
                        <div class="img">
                          <img src={pp2} alt="" />
                        </div>
                        <div class="details">
                          <a href="#">Climbing</a>
                          <span>50+ members</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </main>
            <FooterComponent />
            <script
      src="https://kit.fontawesome.com/9e5ba2e3f5.js"
      crossorigin="anonymous"
    ></script>
                <script src="js/index.js"></script>

            </>
        );
    }
}

export default HomePageComponent;
