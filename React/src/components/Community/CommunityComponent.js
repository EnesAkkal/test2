import { Component } from "react";
import "../../styles/homepage.css";
import "../../styles/community.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faArrowRight,
  faGear,
  faThumbsUp,
  faCalendarPlus,
  faArrowRightFromBracket,
  faSquarePlus
} from "@fortawesome/free-solid-svg-icons";
import pp1 from "../../assets/pp1.jpg";
import FooterComponent from "../../components/FooterComponent.js";
import HeaderComponent from "../../components/HeaderComponent.js";

function CommunityComponent() {

  const handleCommunity = () => {
    window.location.href = '/community/createpage';
  }

  const createPost = () => {
    window.location.href = '/createpost';
  }

  const CommunitySettings = () => {
    window.location.href = '/community/settings/kickuser';
  }

  return (
    <>
      <HeaderComponent />
      <div className="main-wrapper">
        <main>
          <div className="homefeed-container">
            <div className="row">
              <section className="left">
                <div className="community-info">
                  <h2>Eco Explorers</h2>
                </div>
                <div className="posts">
                  <ul>
                    <li>
                      <div className="post-info-area">
                        <p>by CaptainD 3 hours ago</p>
                      </div>
                      <div className="post-title">
                        <h3>
                          {" "}
                          Who’s the tightest person you’ve ever known and what
                          are the “highlights”?
                        </h3>
                      </div>
                      <div className="post-content">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <div className="reactions">
                        <a>
                            {" "}
                            250 <FontAwesomeIcon icon={faThumbsUp} className="icons" />
                          </a>
                          <a>
                            {" "}
                            100 <FontAwesomeIcon icon={faComment} className="icons" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>asdsda</li>
                    <li>asdsda</li>
                    <li>asdsda</li>
                  </ul>
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
                    hub for connecting with like-minded individuals committed to
                    protecting our planet.
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
                    <a href="#" className="btn btn-red" onClick={CommunitySettings}>
                    <FontAwesomeIcon icon={faGear} /> Manage Community 
                    </a>
                  </div>
                  <div className="buttons">
                    <a href="#" className="btn btn-red" onClick={createPost}>
                    <FontAwesomeIcon icon={faSquarePlus}/> Create Template
                    </a>
                  </div>
                  <div className="buttons">
                    <a href="#" className="btn btn-red" onClick={handleCommunity}>
                    <FontAwesomeIcon icon={faCalendarPlus} /> Create Event
                    </a>
                  </div>
                  <div className="buttons">
                    <a href="#" className="btn btn-red" onClick={handleCommunity}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket}  /> Leave from the Community
                    </a>
                  </div>
                </div>
                <div className="box recommended-communities">
                  <h3>Owner </h3>
                  <div className="inner-box">
                    <div className="img">
                      <img src={pp1} alt="" />
                    </div>
                    <div className="details">
                      <a href="#">Captain-D</a>
                      <span>77 Posts</span>
                    </div>
                  </div>
                </div>
                <div className="box community-info">
                  <h3> Community Moderators</h3>
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
                <div className="box community-info">
                  <h3> Member List</h3>
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
    </>
  );
}

export default CommunityComponent;
