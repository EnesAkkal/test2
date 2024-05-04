package com.enesakkal.communityapp.models.community;
import com.enesakkal.communityapp.models.post.Post;
import com.enesakkal.communityapp.models.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data  // this is from lombok library, this reduces the usage of getter/setter consturctors and initializations
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "communities") // this is going to be our table name 

public class Community {

    @Id // our id will be unique.
    private String _id;
    
    private String name;
    private String description;
    private boolean isPrivate;
    private User owner;
    private int memberCount;
    private int postCount;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date lastModifiedDate;
    private List<User> moderators;
    private List<User> members;
    private List<User> bannedUsers;
    private List<Post> posts;
    private List<String> tags;

}
