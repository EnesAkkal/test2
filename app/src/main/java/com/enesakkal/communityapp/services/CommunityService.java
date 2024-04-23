package com.enesakkal.communityapp.services;

import com.enesakkal.communityapp.models.community.Community;
import com.enesakkal.communityapp.repositories.CommunityRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunityService {

    private final CommunityRepository repository;

    public CommunityService(CommunityRepository repository) {
        this.repository = repository;
    }

    public Community addCommunity(Community community) {
        try {
            repository.save(community);
            return community;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public void deleteCommunityById(ObjectId id) {
        repository.deleteById(id);
    }

    public boolean existsByDescription(String description) {
        return repository.existsByDescription(description);
    }

    public List<Community> getCommunities(String filter){
        if (filter == null) {
            return repository.findAll();
        }
        return repository.findAllByNameContaining(filter);
    }
    public List<Community> getCommunities(){
        return repository.findAll();
    }

    public Community createCommunity(Community community) {
        return repository.save(community);
    }
}
