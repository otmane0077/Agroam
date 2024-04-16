package com.esisa.agroamPFA.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.esisa.agroamPFA.dto.UserDto;
import com.esisa.agroamPFA.model.User;
import com.esisa.agroamPFA.repositories.UserRepository;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User save(UserDto userDto) {
	    String role = userDto.getRole() != null && !userDto.getRole().isEmpty() ? userDto.getRole() : "USER";
	    User user = new User(userDto.getEmail(), passwordEncoder.encode(userDto.getPassword()), role, userDto.getFullname());
	    return userRepository.save(user);
	}

}
