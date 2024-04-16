package com.esisa.agroamPFA.service;

import com.esisa.agroamPFA.dto.UserDto;
import com.esisa.agroamPFA.model.User;

public interface UserService {
	
	User save (UserDto userDto);
	
}
