package com.example.ServerSide.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ServerSide.entity.User;
import com.example.ServerSide.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user/")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	
	
	@PostMapping("save")
	public String addUser(@RequestBody User user) {
		userRepository.save(user);
		return "User has successfully Signed Up";
	}
 
}
