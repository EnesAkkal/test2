package com.enesakkal.communityapp.repositories;
import com.enesakkal.communityapp.models.post.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

// Spring Data repositories provide a way to define query methods in an interface by simply declaring method signatures.

@Repository
public interface PostRepository extends MongoRepository<Post, String> {
    // this method may or may not return post object
    Optional<Post> findByTitle(String title);
    Optional<Post> findBy_id(String id);
    Boolean existsByTitle(String title);
    Boolean existsBy_id(String id);
    List<Post> findAllByCommunityId(String communityId);

}
