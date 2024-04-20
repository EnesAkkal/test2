import React from "react";
import "../styles/post.css";

function Post() {
  return (
    <div class ="root">
    <div class="post-container">
      <div class="column">
        <h2>Create New Topic</h2>
        <form className="form">
          <label for="fname">Title</label>
          <textarea id="description" name="description" rows="1"></textarea>

          <label for="lname">Tags</label>
          <textarea id="description" name="description" rows="1"></textarea>

            <div class="flex-row">
              <label for="file-upload">Select a photo to upload:</label>
              <input type="file" id="file-upload" name="file-upload" />
            </div>
            <div class="flex-row">
              <label for="description">Description of the photo (optional):</label>
              <textarea id="description" name="description" rows="2"></textarea>
            </div>
          <div class="flex-row">
            <label for="improvements">
             Content
            </label>
            <textarea id="improvements" name="improvements" rows="6"></textarea>
          </div>

          <input type="submit" value="Create Post" />
        </form>
      </div>
    </div>
    </div>
  );
}

export default Post;
