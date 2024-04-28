package com.enesakkal.communityapp.services;

import com.enesakkal.communityapp.models.post.Comment;
import com.enesakkal.communityapp.models.post.Post;
import com.enesakkal.communityapp.models.post.Template;
import com.enesakkal.communityapp.repositories.PostRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PostService {
    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public String getPostById(String id) {
        return repository.findById(id).orElseThrow().getTitle();
    }

    public void deletePostById(String id) {
        repository.deleteById(id);
    }

    public boolean existsByTitle(String title) {
        return repository.existsByTitle(title);
    }

    public boolean existsByBody(String body) {
        return repository.existsByBody(body);
    }

    public boolean existsByTemplates(List<Template> templates) {
        return repository.existsByTemplates(templates);
    }

    public boolean existsByCreatedAt(Date createdAt) {
        return repository.existsByCreatedAt(createdAt);
    }

    public boolean existsByLastModifiedDate(Date lastModifiedDate) {
        return repository.existsByLastModifiedDate(lastModifiedDate);
    }

    public Post createPost(Post post) {
        return repository.save(post);
    }

    public List<Comment> getComments(String id) {
        return repository.findById(id).orElseThrow().getComments();
    }

    public List<Template> getTemplates(String id) {
        return repository.findById(id).orElseThrow().getTemplates();
    }
    // Read operation
    public List<Post> getAllPosts() {
        return repository.findAll();
    }

    public Post updatePost(String id, Post post) {
        Post existingPost = repository.findById(id).orElseThrow();
        existingPost.setTitle(post.getTitle());
        existingPost.setBody(post.getBody());
        existingPost.setCommunityId(post.getCommunityId());
        existingPost.setUpVotes(post.getUpVotes());
        existingPost.setDownVotes(post.getDownVotes());
        existingPost.setCommentCount(post.getCommentCount());
        existingPost.setTemplates(post.getTemplates());
        existingPost.setComments(post.getComments());
        return repository.save(existingPost);
    }

    public void deleteAllPosts() {
        repository.deleteAll();
    }


}
