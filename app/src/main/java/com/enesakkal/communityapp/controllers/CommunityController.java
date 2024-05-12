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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/community")
public class CommunityController {

    private final PostService postService;
    private final TemplateService templateService;
    private final CommunityService communityService;

    private final UserService userService;

    public CommunityController(PostService postService, TemplateService templateService,
            CommunityService communityService, UserService userService) {
        this.postService = postService;
        this.templateService = templateService;
        this.communityService = communityService;
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Community> getCommunity(@PathVariable String id) {
        return ResponseEntity.ok(communityService.getCommunity(id));
    }

    @GetMapping()
    public ResponseEntity<List<Community>> getCommunities(
            @RequestParam(required = false, name = "filter") String filter) {
        if (filter == null || filter.isEmpty()) {
            return ResponseEntity.ok(communityService.getCommunities());
        }
        return ResponseEntity.ok(communityService.getCommunities(filter));
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    // Tek bir ID istediğimiz için {id} şeklinde yazmamız gerekiyor.
    @GetMapping("/posts/{id}")
    public ResponseEntity<List<Template>> getTemplates(@PathVariable String id) {
        return ResponseEntity.ok(templateService.getAllTemplates(id));
    }

    @PostMapping("/create")
    // @RequestBody takes this JSON data and converts it into a CreateCommunityDto
    // object.
    public ResponseEntity<Community> createCommunity(@RequestBody @Valid CreateCommunityDto community) {
        // Response entity is used for if the request was successful or if there was an
        // error, among other outcomes. ex:http ->404 not found
        User owner = userService.getUserById(community.getOwnerId());

        Community newCommunity = new Community();
        newCommunity.setName(community.getName());
        newCommunity.setDescription(community.getDescription());
        newCommunity.setPrivate(Boolean.parseBoolean(community.getIsPrivate()));
        newCommunity.setOwner(owner);
        newCommunity.setTags(List.of(community.getTags()));
        newCommunity.setCreatedAt(new Date());
        newCommunity.setLastModifiedDate(new Date());
        return ResponseEntity.ok(communityService.putCommunity(newCommunity));
    }

    @PostMapping("/join/{communityId}")
    public ResponseEntity<Community> joinCommunity(@RequestBody String userId, @PathVariable String communityId) {

        return ResponseEntity.ok(communityService.joinCommunity(userId, communityId));
    }

    @DeleteMapping("/deleteall")
    public ResponseEntity<String> deleteAll() {
        communityService.deleteAll();
        return ResponseEntity.ok("All communities deleted");
    }

    @PostMapping("/{id}/createpost")
    public ResponseEntity<Post> createPost(@RequestBody Post post, @PathVariable String id) {

        Community community = communityService.getCommunity(id);
        if (community == null) {
            throw new RuntimeException("Community not found");
        }
        post.setCommunityId(community.get_id());
        Post newPost = postService.createPost(post);

        // update the post count of the community
        community.setPostCount(community.getPostCount() + 1);
        // update posts of the community
        community.getPosts().add(post);
        communityService.putCommunity(community);

        return ResponseEntity.ok(newPost);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Community>> searchCommunities(@RequestParam String name) {
        List<Community> communities = communityService.searchCommunitiesByName(name);
        return ResponseEntity.ok(communities);
    }

    @GetMapping("/{id}/leave")
    public ResponseEntity<String> leaveCommunity(@RequestParam String userId, @PathVariable String id) {
        communityService.leaveCommunity(userId, id);
        return ResponseEntity.ok("User left community successfully");
    }

}
