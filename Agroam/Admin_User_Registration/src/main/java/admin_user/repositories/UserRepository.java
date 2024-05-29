package admin_user.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import admin_user.model.User;

public interface UserRepository extends MongoRepository<User, String> { // Assuming the ID type is String.
    
    User findByEmail(String email);
}
