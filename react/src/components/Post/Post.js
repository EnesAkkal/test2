import "../../styles/post.css";
import HeaderComponent from "../HeaderComponent.js";
import FooterComponent from "../FooterComponent.js";
import { useState } from "react";
import axios from "api/axios.js";
import { useParams } from "react-router-dom";
import useAuth from "hooks/useAuth.js";

function Post() {
  const { id } = useParams();
  const { auth } = useAuth();
  if (!auth) {
    window.location.href = "/login";
  }
  const username = auth.username;

  const [post, setPost] = useState({
    title: "",
    username: username,
    tags: [],
    description: "",
    body: "",
    communityId: id
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/community/" + id + "/createpost", post).then((response) => {
      console.log(response.data);
      window.location.href = "/community/" + id;
    });
  }

  const handleChange = (e) => {
    if (e.target.name === "tags") {
      setPost({
        ...post,
        tags: e.target.value.split(",")
      });
      return;
    }

    setPost({
      ...post,

      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <HeaderComponent />
      <div className="root">
        <div className="post-container">
          <div className="column">
          <div className="template">
                Choose a template
              </div>
            <select name="templates" id="template">
              <option value="templates1">templates1</option>
              <option value="templates2">templates2</option>
              <option value="templates3">templates3</option>
            </select>
            <div className="title">
              <h2>Create New Post</h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <textarea id="title" name="title" rows="1" onChange={handleChange}></textarea>

              <label htmlFor="tags">Tags</label>
              <textarea id="tags" name="tags" rows="1" onChange={handleChange}></textarea>

              <div className="flex-row">
                <label htmlFor="body">Description</label>
                <textarea id="body" name="body" rows="2" onChange={handleChange}></textarea>
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
