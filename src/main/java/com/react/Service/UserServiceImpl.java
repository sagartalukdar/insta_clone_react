package com.react.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.react.Exception.UserException;
import com.react.Repository.UserRepository;
import com.react.model.User;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Override
	public User resgisterUser(User user) throws UserException {
		if(user.getEmail()==null || user.getPassword()==null
	      || user.getUsername()==null || user.getName()==null			
				) {
			throw new UserException("email,password,name,username cannot be empty. ");
		}
        Optional<User> isEmailExist=userRepository.findByEmail(user.getEmail());
        if(isEmailExist.isPresent()) {
        	throw new UserException("email is already used in another account");
        }
		Optional<User> isUsernameExist=userRepository.findByUsername(user.getUsername());
		if(isUsernameExist.isPresent()) {
			throw new UserException("username is already defined with another account");
		}
		User newUser=new User();
		newUser.setEmail(user.getEmail());
		newUser.setPassword(passwordEncoder.encode(user.getPassword()));
		newUser.setName(user.getName());
		newUser.setUsername(user.getUsername());
		return userRepository.save(newUser);
	}

	@Override
	public User findByEmail(String email) throws UserException {
		Optional<User> opt=userRepository.findByEmail(email);
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new UserException("user not found with email: "+email);
	}

	@Override
	public User findByUsername(String username) throws UserException {
		Optional<User> opt=userRepository.findByUsername(username);
		if(opt.isEmpty()) {
			throw new UserException("user not found with username: "+username);
		}
		return opt.get();		
	}

}
