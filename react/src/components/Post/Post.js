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

  const [errors, setErrors] = useState({});
  const [template, setTemplate] = useState('Default Template'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!post.title.trim()) newErrors.title = "Title is required.";
    if (!post.tags.length) newErrors.tags = "At least one tag is required.";
    if (!post.body.trim()) newErrors.body = "Description is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); 
      return;
    }


    axios.post("/community/" + id + "/createpost", post)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/community/" + id;
      })
      .catch(error => {
        console.error('Failed to create post:', error);
        alert('Failed to create post.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "tags") {
      setPost(prevPost => ({
        ...prevPost,
        tags: value.split(",").map(tag => tag.trim()) 
      }));
    } else {
      setPost(prevPost => ({
        ...prevPost,
        [name]: value
      }));
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }));
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  return (
    <>
      <HeaderComponent />
      <div className="root">
        <div className="post-container">
          <div className="column">
            <div className="template">
              Choose a template
            </div>
            <select name="templates" id="template" onChange={handleTemplateChange} value={template}>
              <option value="Default Template">Template 1</option>
              <option value="templates2">Template 2</option>
              <option value="templates3">Template 3</option>
            </select>
            <div className="template-content">
              {template === 'Default Template' && (
                <div>
                  <div className="title">
                    <h2>Create New Post</h2>
                  </div>
                  <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <textarea id="title" name="title" rows="1" onChange={handleChange} value={post.title}></textarea>
                    {errors.title && <div className="error">{errors.title}</div>}

                    
                <label htmlFor="tags">Tags</label>
                <textarea id="tags" name="tags" rows="1" onChange={handleChange} value={post.tags.join(",")}></textarea>
                {errors.tags && <div className="error">{errors.tags}</div>}

                    <label htmlFor="body">Description</label>
                    <textarea id="body" name="body" rows="2" onChange={handleChange} value={post.body}></textarea>
                    {errors.body && <div className="error">{errors.body}</div>}

                    <input type="submit" value="Create Post" />
                  </form>
                </div>
              )}
              {template === 'templates2' && 
              
              <div>
              <div className="title">
                <h2>Create New Post</h2>
              </div>
              <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <textarea id="title" name="title" rows="1" onChange={handleChange} value={post.title}></textarea>
                {errors.title && <div className="error">{errors.title}</div>}

                <label htmlFor="tags">Tags</label>
                <textarea id="tags" name="tags" rows="1" onChange={handleChange} value={post.tags.join(",")}></textarea>
                {errors.tags && <div className="error">{errors.tags}</div>}

                <label htmlFor="body">Description</label>
                <textarea id="body" name="body" rows="2" onChange={handleChange} value={post.body}></textarea>
                {errors.body && <div className="error">{errors.body}</div>}

                <input type="submit" value="Create Post" />
              </form>
            </div>
              }
              {template === 'templates3' && 
                   <div>
                   <div className="title">
                     <h2>Create New Post</h2>
                   </div>
                   <form className="form" onSubmit={handleSubmit}>
                     <label htmlFor="title">Title</label>
                     <textarea id="title" name="title" rows="1" onChange={handleChange} value={post.title}></textarea>
                     {errors.title && <div className="error">{errors.title}</div>}
 
                     <label htmlFor="body">Description</label>
                <textarea id="body" name="body" rows="2" onChange={handleChange} value={post.body}></textarea>
                {errors.body && <div className="error">{errors.body}</div>}
 
                     <input type="submit" value="Create Post" />
                   </form>
                 </div>
              
              
              }
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Post;
