package com.enesakkal.communityapp.controllers;
import com.enesakkal.communityapp.models.community.Community;
import com.enesakkal.communityapp.models.user.User;
import com.enesakkal.communityapp.services.CommunityService;
import com.enesakkal.communityapp.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;
    private final CommunityService communityService;

    public UserController(UserService service, CommunityService communityService) {
        this.service = service;
        this.communityService = communityService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return ResponseEntity.ok(service.getUserById(id));
    }

    @PostMapping("/{id}")
    public ResponseEntity<User> updateUserById(@PathVariable String id, @RequestBody User user) {
        return ResponseEntity.ok(service.updateUserById(id,user));
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(service.getUsers());
    }

    @GetMapping("/{id}/communities")
    public ResponseEntity<List<Community>> getCommunities(@PathVariable String id) {
        List<String> followedCommunities = service.getUserById(id).getFollowedCommunities();
        List<Community> communities = communityService.getCommunitiesByIds(followedCommunities);
        return ResponseEntity.ok(communities);
    }
}
