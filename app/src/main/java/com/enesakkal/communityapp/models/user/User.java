package com.enesakkal.communityapp.models.user;

import com.enesakkal.communityapp.dtos.UserDto;
import com.enesakkal.communityapp.models.post.Comment;
import com.enesakkal.communityapp.models.post.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {

    private String _id;
    private String username;
    private String password;
    private String email;
    private Date registeredAt;
    private List<Post> posts;
    private List<Comment> comments;
    private List<String> followedCommunities;
    private List<String> createdCommunities;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date lastModifiedDate;
    public UserDto toUserDto() {
        return UserDto.builder()
                ._id(_id)
                .username(username)
                .email(email)
                .build();

    }


}
