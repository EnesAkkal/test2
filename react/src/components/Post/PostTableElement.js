import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns'; // Import the format function from date-fns

function PostTableElement({ post }) {
    console.log("Post data received:", post); // Debugging: Log the entire post object
    const { username, title, body, upVotes, commentCount, createdAt } = post;

    // Check if createdAt is valid and format the date
    const formattedDate = createdAt ? format(new Date(createdAt), 'PPpp') : 'ssd';

    console.log("Formatted date:", formattedDate); // Debugging: Log the formatted date

    return (
        <div className="post-info-area">
            <p>by {username} on {formattedDate}</p>
            <div className="post-title">
                <h3>{title}</h3>
            </div>
            <div className="post-content">
                <p>{body}</p>
                <div className="reactions">
                    <a>
                        {upVotes} <FontAwesomeIcon icon={faThumbsUp} className="icons" />
                    </a>
                    <a>
                        {commentCount} <FontAwesomeIcon icon={faComment} className="icons" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PostTableElement;
