package com.enesakkal.communityapp.repositories;

import com.enesakkal.communityapp.models.post.Post;
import com.enesakkal.communityapp.models.post.Template;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends MongoRepository<Post, ObjectId> {
    Optional<Post> findByTitle(String title);
    Optional<Post> findByBody(String body);
    Optional<Post> findByTemplates(List<Template> templates);
    Optional<Post> findByCreatedAt(Date createdAt);
    Optional<Post> findByLastModifiedDate(Date lastModifiedDate);
    Boolean existsByTitle(String title);
    Boolean existsByBody(String body);
    Boolean existsByTemplates(List<Template> templates);
    Boolean existsByCreatedAt(Date createdAt);
    Boolean existsByLastModifiedDate(Date lastModifiedDate);

}
