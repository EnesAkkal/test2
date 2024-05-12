package com.enesakkal.communityapp.services;
import com.enesakkal.communityapp.models.post.Post;
import com.enesakkal.communityapp.models.post.Template;
import com.enesakkal.communityapp.repositories.PostRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TemplateService {

    private final PostRepository repository;

    public TemplateService(PostRepository repository) {
        this.repository = repository;
    }

    public Template getTemplateById(String id, String postId) {
        Post post = repository.findById(postId).orElse(null);
        if (post != null) {
            // Find and remove the template with the given templateId
            return post.getTemplates().stream()
                    .filter(template -> template.get_id().equals(id))
                    .findFirst()
                    .orElseThrow();
        } else {
            // Handle case where post with given ID is not found
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }

    }


    public void deleteTemplate(String postId, String templateId) {
        Post post = repository.findById(postId).orElse(null);
        if (post != null) {
            // Find and remove the template with the given templateId
            post.getTemplates()
                    .removeIf(template -> template.get_id()
                            .equals(templateId));
            // Save the updated post back to the repository
            repository.save(post);
        } else {
            // Handle case where post with given ID is not found
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }

    public void addTemplate(String postId, Template template) {
        Post post = repository.findById(postId)
                .orElse(null);
        if (post != null) {
            // Add the new template to the post
            post.getTemplates()
                    .add(template);
            // Save the updated post back to the repository
            repository.save(post);
        } else {
            // Handle case where post with given ID is not found
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }

    public void updateTemplate(String postId, String templateId, Template template) {
        Post post = repository.findById(postId)
                .orElse(null);
        if (post != null) {
            // Find and update the template with the given templateId
            post.getTemplates().stream()
                    .filter(t -> t.get_id().equals(templateId))
                    .findFirst()
                    .ifPresent(t -> {
                        t.setTitle(template.getTitle());
                        t.setBody(template.getBody());
                        t.setTags(template.getTags());
                    });
            // Save the updated post back to the repository
            repository.save(post);
        } else {
            // Handle case where post with given ID is not found
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }

    public void deleteAllTemplates(String postId) {
        Post post = repository.findById(postId).orElse(null);
        if (post != null) {
            post.getTemplates().clear();
            repository.save(post);
        } else {
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }

    public List<Template> getAllTemplates(String postId) {
        Post post = repository.findById(postId).orElse(null);
        if (post != null) {
            return post.getTemplates();
        } else {
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }

    public List<String> getTags(String postId, String templateId) {
        Post post = repository.findById(postId).orElse(null);
        if (post != null) {
            return post.getTemplates().stream()
                    .filter(template -> template.get_id().equals(templateId))
                    .findFirst()
                    .orElseThrow().getTags();
        } else {
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }

    public void addTag(String postId, String templateId, String tag) {
        Post post = repository.findById(postId).orElse(null);
        if (post != null) {
            post.getTemplates().stream()
                    .filter(template -> template.get_id().equals(templateId))
                    .findFirst()
                    .ifPresent(template -> template.getTags().add(tag));
            repository.save(post);
        } else {
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }

    public void deleteTag(String postId, String templateId, String tag) {
        Post post = repository.findById(postId).orElse(null);
        if (post != null) {
            post.getTemplates().stream()
                    .filter(template -> template.get_id().equals(templateId))
                    .findFirst()
                    .ifPresent(template -> template.getTags().remove(tag));
            repository.save(post);
        } else {
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }

    public void deleteAllTags(String postId, String templateId) {
        Post post = repository.findById(postId).orElse(null);
        if (post != null) {
            post.getTemplates().stream()
                    .filter(template -> template.get_id().equals(templateId))
                    .findFirst()
                    .ifPresent(template -> template.getTags().clear());
            repository.save(post);
        } else {
            throw new IllegalArgumentException("Post not found with ID: " + postId);
        }
    }


}
