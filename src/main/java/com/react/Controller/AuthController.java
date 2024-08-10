package com.react.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.react.Exception.UserException;
import com.react.Repository.UserRepository;
import com.react.Service.UserService;
import com.react.model.User;

@RestController
public class AuthController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/signUp")
	public ResponseEntity<User> signUp(@RequestBody User user) throws UserException{
		return new ResponseEntity<User>(userService.resgisterUser(user),HttpStatus.CREATED);
	}
}
