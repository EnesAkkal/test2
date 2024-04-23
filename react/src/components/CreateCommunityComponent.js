import React,{useState} from "react";
import "../styles/post.css";
import HeaderComponent from "./HeaderComponent.js";
import FooterComponent from "./FooterComponent.js";
import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth.js";

function CreateCommunityComponent() {
  const {auth} = useAuth();
  const [community, setCommunity] = useState({
    ownerId: auth?.id,
    description: "", // replace with the actual description
    name: "",
    isPrivate: false
  });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCommunity((prev) => {
            return {
            ...prev,
            [name]: value,
            };
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("/community/create",
          JSON.stringify({ name: community.name, description: community.description, isPrivate: community.isPrivate, ownerId: community.ownerId}),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
      );
    }

    return (
        <div>
            <HeaderComponent />
            <div className="post-container">
                <form onSubmit={handleSubmit}>
                    <h1>Create Community</h1>
                    <label>
                        <input type="text" name="name" placeholder="Name" value={community.name} onChange={handleChange} />
                    </label>
                    <label>
                        <textarea name="description" placeholder="Description" value={community.description} onChange={handleChange} />
                    </label>
                    <label>
                        <input type="checkbox" name="isPrivate" value={community.isPrivate} onChange={handleChange} />
                        <span>Private</span>
                    </label>
                    <button type="submit">Create</button>
                </form>
            </div>
            <FooterComponent />
        </div>
    )
}

export default CreateCommunityComponent;
