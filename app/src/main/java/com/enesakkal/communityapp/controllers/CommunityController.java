package com.enesakkal.communityapp.controllers;

import com.enesakkal.communityapp.dtos.CreateCommunityDto;
import com.enesakkal.communityapp.models.community.Community;
import com.enesakkal.communityapp.models.post.Post;
import com.enesakkal.communityapp.models.post.Template;
import com.enesakkal.communityapp.models.user.User;
import com.enesakkal.communityapp.services.CommunityService;
import com.enesakkal.communityapp.services.PostService;
import com.enesakkal.communityapp.services.TemplateService;
import com.enesakkal.communityapp.services.UserService;
import jakarta.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/community")
public class CommunityController {

    private final PostService postService;
    private final TemplateService templateService;
    private final CommunityService communityService;

    private final UserService userService;

    public CommunityController(PostService postService, TemplateService templateService, CommunityService communityService, UserService userService){
        this.postService = postService;
        this.templateService = templateService;
        this.communityService = communityService;
        this.userService = userService;
    }
    @GetMapping()
    public ResponseEntity<List<Community>> getCommunities(@RequestParam(required = false, name = "filter") String filter) {
        if (filter == null || filter.isEmpty()) {
            return ResponseEntity.ok(communityService.getCommunities());
        }
        return ResponseEntity.ok(communityService.getCommunities(filter));
    }
    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<List<Template>> getTemplates(@PathVariable ObjectId id) {
        return ResponseEntity.ok(templateService.getAllTemplates(id));
    }

    @PostMapping("/create")
    //@RequestBody takes this JSON data and converts it into a CreateCommunityDto object.
    public ResponseEntity<Community> createCommunity(@RequestBody @Valid CreateCommunityDto community) {
    //Response entity is used for if the request was successful or if there was an error, among other outcomes. ex:http ->404 not found
        User owner = userService.getUserById(community.getOwnerId());

        Community newCommunity = new Community();
        newCommunity.setName(community.getName());
        newCommunity.setDescription(community.getDescription());
        newCommunity.setPrivate(community.isPrivate());
        newCommunity.setOwner(owner);
        return ResponseEntity.ok(communityService.createCommunity(newCommunity));
    }

}
