import React, { useState } from "react";
import "../styles/post.css";
import HeaderComponent from "./HeaderComponent.js";
import FooterComponent from "./FooterComponent.js";
import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth.js";

function CreateCommunityComponent() {
  // this line Utilize custom authentication hook to access user authentication status and data.
  const { auth } = useAuth();
  // State hook for managing community details. Initializes state with the authenticated user's ID and default values for community properties.
  const [community, setCommunity] = useState({
    ownerId: auth?.id,
    description: "",
    name: "",
    isPrivate: false, // Set the community's privacy status to public by default.
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommunity((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "/community/create",
      JSON.stringify({
        name: community.name,
        description: community.description,
        isPrivate: community.isPrivate,
        ownerId: community.ownerId,
      }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };

  return (
    <div>
      <HeaderComponent />
      <div class="root">
        <div class="post-container">
          <div class="column">
            <h2>Create New Community</h2>
            <form className="form">
              <label for="fname">Name</label>
              <textarea id="description" name="description" rows="1"></textarea>

              <label for="lname">Tags</label>
              <textarea id="description" name="description" rows="1"></textarea>

              <div class="flex-row">
                <label>
                  <input
                    type="checkbox"
                    name="isPrivate"
                    value={community.isPrivate}
                    onChange={handleChange}
                  />
                  <span>Private</span>
                </label>
              </div>
              <div class="flex-row">
                <label for="improvements">Description</label>
                <textarea
                  id="improvements"
                  name="improvements"
                  rows="6"
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
