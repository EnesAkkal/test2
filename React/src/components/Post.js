import React from "react";
import "../styles/post.css";
import HeaderComponent from "./HeaderComponent.js";
import FooterComponent from "./FooterComponent.js";

function Post() {
  return (
    <>
      <HeaderComponent />
      <div className="root">
        <div className="post-container">
          <div className="column">
            <div className="title">
              <h2>Create New Post</h2>
            </div>
            <form className="post-form">
              <div className="post_FormContainer">
                <label for="ftitle">Title</label>
                <textarea
                  id="description"
                  name="description"
                  rows="1"
                ></textarea>

                <label for="ltags">Tags</label>
                <textarea
                  id="description"
                  name="description"
                  rows="1"
                ></textarea>
              </div>
              <div className="flex-row">
                <label for="file-upload">Select a photo to upload:</label>
                <input type="file" id="file-upload" name="file-upload" />
              </div>
              <div className="flex-row">
                <label for="description">
                  Description of the photo (optional):
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="2"
                ></textarea>
              </div>
              <div className="flex-row">
                <label for="improvements">Content</label>
                <textarea
                  id="improvements"
                  name="improvements"
                  rows="6"
                ></textarea>
              </div>

              <input type="submit" value="Create Post" />
            </form>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Post;
