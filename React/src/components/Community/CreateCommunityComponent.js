import React, { useEffect, useState } from "react";
import "../../styles/post.css";
import FooterComponent from "../../components/FooterComponent.js";
import HeaderComponent from "../../components/HeaderComponent.js";
import useAuth from "../../hooks/useAuth.js";
import axios from "../../api/axios.js";
import { useNavigate } from "react-router-dom";

const CREATE_URL = "/community/create";
function CreateCommunityComponent() {
  // this line Utilize custom authentication hook to access user authentication status and data.
  const { auth } = useAuth();
  // State hook for managing community details. Initializes state with the authenticated user's ID and default values for community properties.
  const [community, setCommunity] = useState({
    ownerId: auth._id,
    description: "1",
    name: "1",
    tags: ["1"],
    isPrivate: false, // Set the community's privacy status to public by default.
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "isPrivate") {
        console.log(community.isPrivate)
        setCommunity((prev) => {
            return {
            ...prev,
            [name]: !prev.isPrivate,
            };
        });

    }else{
        setCommunity((prev) => {
            return {
            ...prev,
            [name]: value,
            };
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCommunity();
  };

  const handleTags = (e) => {
    const { name, value } = e.target;
    setCommunity((prev) => {
      return {
        ...prev,
        [name]: value.split(","),
      };
    });
  };

  const createCommunity = async () => {
    try {
      const response = await axios.post(CREATE_URL,
        JSON.stringify(community),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      alert("Create Success" + JSON.stringify(response?.data));
      navigate(`/community/${response?.data._id}`); // Redirect to the newly created community's page after creation.      
    } catch (err) {
      if (!err?.response) {
        console.log('No Server Response');
      } else if (err.response?.status === 400) {
        console.log('Missing Community Name');
      } else {
        console.log(err)
      }
    }
  }

  return (
    <div>
      <HeaderComponent />
      <div className="root">
        <div className="post-container">
          <div className="column">
            <div className="title">
              <h2>Create New Community</h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <label for="name">Name</label>
              <textarea id="name" name="name" rows="1" onChange={handleChange}> </textarea>

              <label for="tags">Tags</label>
              <textarea id="tags" name="tags" rows="1" onChange={handleTags}></textarea>

              <div className="flex-row">
                <label>
                  <input
                    type="checkbox"
                    name="isPrivate"
                    onChange={handleChange}
                  />
                  <span>Private</span>
                </label>
              </div>
              <div className="flex-row">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  onChange={handleChange}
                ></textarea>
              </div>

              <input type="submit" value="Create Community" />
            </form>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default CreateCommunityComponent;
