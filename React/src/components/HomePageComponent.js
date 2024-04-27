import { Component } from "react";
import "../styles/homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
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
                    <div className="posts_topic">Community Name </div>
                    <div className="posts_category">Tags</div>
                    <div className="posts_replies"> Posts</div>
                    <div className="posts_views"> Members</div>
                    <div className="posts_posts">Join</div>
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
                      <div className="posts_posts"><FontAwesomeIcon icon={faPlus} /></div>
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
                      <div className="posts_posts"><FontAwesomeIcon icon={faPlus} /> </div>
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
                      <div className="posts_posts"><FontAwesomeIcon icon={faPlus} /></div>
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
                      <div className="posts_posts"><FontAwesomeIcon icon={faPlus} /></div>
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
                      <div className="posts_posts"><FontAwesomeIcon icon={faPlus} /></div>
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
