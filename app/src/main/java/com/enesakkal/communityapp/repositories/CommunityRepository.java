package com.enesakkal.communityapp.repositories;
import com.enesakkal.communityapp.models.community.Community;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Date;
import java.util.List;

@Repository
public interface CommunityRepository extends MongoRepository<Community, String>{
    Boolean existsByDescription(String description);
    Boolean existsByCreatedAt(Date createdAt);
    Boolean existsByLastModifiedDate(Date lastModifiedDate);

    List<Community> findAllByNameContaining(String filter);
}
