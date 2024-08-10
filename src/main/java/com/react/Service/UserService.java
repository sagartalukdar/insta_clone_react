package com.react.Service;

import com.react.Exception.UserException;
import com.react.model.User;

public interface UserService {

	public User resgisterUser(User user) throws UserException;
	
	public User findByEmail(String email) throws UserException;
	
	public User findByUsername(String username) throws UserException;
}
