package com.example.ServerSide.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ServerSide.entity.Movies;
import com.example.ServerSide.repository.MoviesRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/movies/")
public class MoviesController {

	@Autowired
	private MoviesRepository moviesRepository;
	
	@GetMapping("listAll")
	public List<Movies> getAllMovies(){
		return moviesRepository.findAll();
	}
}
