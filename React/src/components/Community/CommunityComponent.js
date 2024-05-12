import { Component, useEffect, useState } from "react";
import "../../styles/homepage.css";
import "../../styles/community.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGear,
  faSliders,
  faArrowRightFromBracket,
  faSquarePlus
} from "@fortawesome/free-solid-svg-icons";
import pp1 from "../../assets/pp1.jpg";
import FooterComponent from "../../components/FooterComponent.js";
import HeaderComponent from "../../components/HeaderComponent.js";
import axios from "../../api/axios.js";
import { useParams } from "react-router-dom";
import PostTableElement from "components/Post/PostTableElement.js";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}


function CommunityComponent() {

  const { id } = useParams();
  const [community, setCommunity] = useState({
    name: "",
    description: "",
    owner: {},
    moderators: [],
    members: [],
    posts: [],
    tags: [],
    createdAt: "",
    lastModifiedDate: "",
    postCount: 0,
    memberCount: 0
  });

  useEffect(() => {
    axios.get("/community/" + id).then((response) => {
      setCommunity(response.data);
      console.log(response.data);
    });
  }, []);

  const handleCommunity = () => {
    window.location.href = '/community/createpage';
  }

  const createPost = () => {
    window.location.href = '/community/' + id + '/createpost';
  }

  const CommunitySettings = () => {
    window.location.href = '/community/settings/kickuser';
  }

   const createTemplate = () => {
    window.location.href = '/community/createTemplate';
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
                  <h2>{community.name}</h2>
                </div>
                <div className="posts">
                  <ul>
                    {community.posts.map((post) => (
                      <li key={post._id}>
                        <PostTableElement post={post} />
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
              <section className="right">
                <div className="box first">
                  <h3>{community.name}</h3>
                  <span>Created On: {formatDate(community.createdAt)}</span>
                  <p>

                    {community.description}
                  </p>
                  <div className="stats">
                    <div>
                      <h4>{community.postCount}</h4>
                      <span>posts</span>
                    </div>
                    <div>
                      <h4>{community.memberCount + 1}</h4>
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
                      <FontAwesomeIcon icon={faSquarePlus} /> Create Post
                    </a>
                  </div>
                  <div className="buttons">
                    <a href="#" className="btn btn-red" onClick={createTemplate}>
                    <FontAwesomeIcon icon={faSliders} /> Create  Template
                    </a>
                  </div>
                  <div className="buttons">
                    <a href="#" className="btn btn-red" onClick={handleCommunity}>
                      <FontAwesomeIcon icon={faArrowRightFromBracket} /> Leave from the Community
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
                      <a href="#">{community.owner.username}</a>
                      <span>{community.postCount} Posts</span>
                    </div>
                  </div>
                </div>
                <div className="box community-info">
                  <h3> Community Moderators</h3>
                  <a href="#">
                    View All <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  {community.moderators.map((moderator) => (
                    <div className="inner-box">
                      <div className="img">
                        <img src={pp1} alt="" />
                      </div>
                      <div className="details">
                        <a href="#">moderator.username</a>
                        <span>202 replies</span>
                      </div>
                    </div>
                  ))}

                </div>
                <div className="box community-info">
                  <h3> Member List</h3>
                  <a href="#">
                    View All <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  {community.members.map((member) => (
                    <div className="inner-box">
                      <div className="img">
                        <img src={pp1} alt="" />
                      </div>
                      <div className="details">
                        <a href="#">{member.username}</a>
                        <span>{community.postCount} Posts</span>
                      </div>
                    </div>
                  ))}

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
