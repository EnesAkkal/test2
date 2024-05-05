import React from "react";
import FooterComponent from "../../components/FooterComponent.js";
import HeaderComponent from "../../components/HeaderComponent.js";
import "../../styles/Test.css";

function Test() {
  return (
    <>
      <HeaderComponent />
      <div className="main-wrapper1">
        <div className="body-area">
          <div className="navigate-section">
            <ul>
              <li>
                <a>test</a>
              </li>
              <li>
                <a>test</a>
              </li>
              <li>
                <a>test</a>
              </li>
              <li>
                <a>test</a>
              </li>
              <li>
                <a>test</a>
              </li>
            </ul>
          </div>
          <div className="pagesection">
            <div className="pagelinks">
              <p>Pages : [1]</p>
            </div>
          </div>
          <div className="forumposts">
            <div className="titlebar">
              <div className="title-author">
                <span id="author">Author</span>
              </div>
              <div className="title-content">
              </div>
            </div>
          </div>
          <div className="poster">
            <h4>
                <a>Inferno1</a>
            </h4>
            <ul className="profile-info">
                <li className="role">Role:Admin</li>
                <li className="status">Status:Active</li>
                <li className="postcount">Posts:500</li>
            </ul>
          </div>
          <div className="postarea">
                    <div className="postconcent">
                        <div className="keyinfo">
                            <h5 className="subject">
                                <a>How to mention someone on forum on 15.04.2024</a>
                            </h5>
                        </div>
                    </div>
                    <hr></hr>
            </div>
        </div>
      
      </div>

      <FooterComponent />
    </>
  );
}

export default Test;
