import { Component } from "react";
import "../styles/homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faArrowRight,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import pp1 from "../assets/pp1.jpg";
import pp2 from "../assets/pp2.png";
import FooterComponent from "./FooterComponent.js";
import HeaderComponent from "./HeaderComponent.js";

class HomePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { username: "", email: "", password: "" },
      signUpMode: true,
      error: null,
    };
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="main-wrapper">
          <main>
            <div className="homefeed-container">
              <div className="row">
                <section className="left">
                  <h2>Recommended communities for you</h2>
                  <div className="posts_head">
                    <div className="posts_topic">Community Name</div>
                    <div className="posts_category">Tags</div>
                    <div className="posts_replies"> Posts</div>
                    <div className="posts_views"> Comments</div>
                    <div className="posts_posts">Views</div>
                  </div>
                  <div className="inner-left">
                    <div className="posts_head1">
                      <div className="posts_topic">
                        <h3>Eco Explorers</h3>
                      </div>
                      <div className="posts_category">
                        <p>Sustainability</p>
                      </div>
                      <div className="posts_replies">77</div>
                      <div className="posts_views">1500</div>
                      <div className="posts_posts">4000</div>
                    </div>
                    <div className="posts_head1">
                      <div className="posts_topic">
                        <h3>Code Crew</h3>
                      </div>
                      <div className="posts_category">
                        <p>Programming</p>
                      </div>
                      <div className="posts_replies">77</div>
                      <div className="posts_views">1500</div>
                      <div className="posts_posts">4000</div>
                    </div>
                    <div className="posts_head1">
                      <div className="posts_topic">
                        <h3>Fashion Lovers</h3>
                      </div>
                      <div className="posts_category">
                        <p>Fashions</p>
                      </div>
                      <div className="posts_replies">77</div>
                      <div className="posts_views">1500</div>
                      <div className="posts_posts">4000</div>
                    </div>
                    <div className="posts_head1">
                      <div className="posts_topic">
                        <h3>Pet Pals</h3>
                      </div>
                      <div className="posts_category">
                        <p>Animals</p>
                      </div>
                      <div className="posts_replies">77</div>
                      <div className="posts_views">1500</div>
                      <div className="posts_posts">4000</div>
                    </div>
                    <div className="posts_head1">
                      <div className="posts_topic">
                        <h3>Time Travelers</h3>
                      </div>
                      <div className="posts_category">
                        <p>History</p>
                      </div>
                      <div className="posts_replies">77</div>
                      <div className="posts_views">1500</div>
                      <div className="posts_posts">4000</div>
                    </div>
                  </div>
                </section>
                <section className="right">
                  <div className="box first">
                    <h3>Eco Explorers</h3>
                    <span>since 2024</span>
                    <p>
                      Welcome to the Eco Explorers Community, a vibrant space for
                      nature enthusiasts and environmental activists. Join us to
                      explore and discuss diverse ecosystems, sustainable living
                      practices, and conservation strategies. Whether you're
                      interested in local wildlife, global environmental
                      challenges, or innovative green technologies, this is your
                      hub for connecting with like-minded individuals committed
                      to protecting our planet.
                    </p>
                    <div className="stats">
                      <div>
                        <h4>77</h4>
                        <span>posts</span>
                      </div>
                      <div>
                        <h4>200</h4>
                        <span>members</span>
                      </div>
                    </div>
                    <div className="buttons">
                      <a href="#" className="btn btn-red">
                        <FontAwesomeIcon icon={faUserLarge} /> join community
                      </a>
                    </div>
                  </div>
                  <div className="box top-contributors">
                    <h3>top contributors this month</h3>
                    <a href="#">
                      View All <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                    <div className="inner-box">
                      <div className="img">
                        <img src={pp1} alt="" />
                      </div>
                      <div className="details">
                        <a href="#">Captain D</a>
                        <span>202 replies</span>
                      </div>
                    </div>
                    <div className="inner-box">
                      <div className="img">
                        <img src={pp1} alt="" />
                      </div>
                      <div className="details">
                        <a href="#">oldguy</a>
                        <span>196 replies</span>
                      </div>
                    </div>
                    <div className="inner-box">
                      <div className="img">
                        <img src={pp1} alt="" />
                      </div>
                      <div className="details">
                        <a href="#">Inferno</a>
                        <span>174 replies</span>
                      </div>
                    </div>
                  </div>
                  <div className="box recommended-communities">
                    <h3>recommended communities</h3>
                    <div className="inner-box">
                      <div className="img">
                        <img src={pp1} alt="" />
                      </div>
                      <div className="details">
                        <a href="#">Code Crew</a>
                        <span>77 members</span>
                      </div>
                    </div>
                    <div className="inner-box">
                      <div className="img">
                        <img src={pp1} alt="" />
                      </div>
                      <div className="details">
                        <a href="#">Pet Pals</a>
                        <span>77 members</span>
                      </div>
                    </div>
                    <div className="inner-box">
                      <div className="img">
                        <img src={pp1} alt="" />
                      </div>
                      <div className="details">
                        <a href="#">Time Travelers</a>
                        <span>77 members</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
        <FooterComponent />
        <script
          src="https://kit.fontawesome.com/9e5ba2e3f5.js"
          crossOrigin="anonymous"
        ></script>
      </div>
    );
  }
}

export default HomePageComponent;
