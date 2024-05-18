import React, { useEffect, useState } from "react";
import "../../styles/AccountSettings.css";
import "../../styles/homepage.css";
import useAuth from "hooks/useAuth.js";
import axios from "api/axios.js";

function FollowedCommunities() {
  const { auth } = useAuth();
  const userId = auth._id;
  const [user, setUser] = useState({});

  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    axios.get(`/users/${userId}`).then((res) => {
      setUser(res.data);
    }
    );
  }, []);


  useEffect(() => {
    axios.get(`/users/${userId}/communities`).then((res) => {
      setCommunities(res.data);
    }
    );
  }
    , []);


  return (
    <>
      <div className="posts_head">
        <div className="posts_topic">Community Name</div>
        <div className="Community_status">Status</div>
        <div className="posts_category">Role</div>
        <div className="posts_replies">Posts</div>
        <div className="posts_views">Members</div>
      </div>
      <div className="inner-left">
        {communities.length > 0 ? communities.map((community) => (
          <div className="posts_head">
            <div className="posts_topic">{community.name}</div>
            <div className="Community_status">  {community.isPrivate ? 'Private' : 'Public'}</div>
            <div className="posts_category">{community.owner.username}</div>
            <div className="posts_replies">{community.postCount}</div>
            <div className="posts_views">{community.memberCount}</div>
          </div>
        )) :
          <div>No followed communities</div>
        }

      </div>
    </>
  );
}

export default FollowedCommunities;
