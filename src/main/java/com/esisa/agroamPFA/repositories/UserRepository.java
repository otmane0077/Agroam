package com.esisa.agroamPFA.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.esisa.agroamPFA.model.User;

public interface UserRepository extends MongoRepository<User, String> { // Assuming the ID type is String.
    
    User findByEmail(String email);
}
