import React from "react";
import "../../styles/AccountSettings.css";
import "../../styles/homepage.css";

function FollowedCommunities({ user }) {
  console.log("User data received in FollowedCommunities:", user);

  if (!user) {
    console.log("No user data available.");
    return <div>No user data available</div>;
  }

  const { followedCommunities } = user;

  return (
    <>
      <div className="posts_head">
        <div className="posts_topic">Community</div>
        <div className="Community_status">Status</div>
        <div className="posts_category">Tags</div>
        <div className="posts_replies">Posts</div>
        <div className="posts_views">Members</div>
      </div>
      <div className="inner-left">
        {followedCommunities.length > 0 ? (
          followedCommunities.map((community, index) => (
            <div key={index} className="community-item">
              <div className="community-name">{community}</div>
              <div className="community-status">Active</div>
              <div className="community-tags">General</div>
              <div className="community-posts">10</div>
              <div className="community-members">100</div>
            </div>
          ))
        ) : (
          <div>No followed communities</div>
        )}
      </div>
    </>
  );
}

export default FollowedCommunities;
