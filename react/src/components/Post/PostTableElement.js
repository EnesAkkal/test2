import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';

function PostTableElement({ post }) {
    
    console.log("Post data received:", post);
    const { _id,username, title, body, upVotes, downVotes, commentCount, comments, createdAt, lastModifiedDate } = post;
    

    

    return (
        <div className="post-info-area">
            <p>by {username} on {createdAt}</p>
            <div className="post-title">
                <h3>
                    {title}
                </h3>
            </div>
            <div className="post-content">
                <p>
                    {post.body}
                </p>
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
    )
}

export default PostTableElement;