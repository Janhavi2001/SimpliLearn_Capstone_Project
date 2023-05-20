package com.example.ServerSide.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	@GetMapping("listHorror")
	public List<Movies> getALLHorrorMovies(){
		return moviesRepository.findByGenere("Horror");
	}
	@GetMapping("listCrime")
	public List<Movies> getALLCrimeMovies(){
		return moviesRepository.findByGenere("Crime");
	}
	@GetMapping("listComedy")
	public List<Movies> getALLComedyMovies(){
		return moviesRepository.findByGenere("Comedy");
	}
	@GetMapping("listRomantic")
	public List<Movies> getALLRomanticMovies(){
		return moviesRepository.findByGenere("Romantic");
	}
	@GetMapping("/{name}")
	public Movies getMovies(@PathVariable("name") String name){
		return moviesRepository.findByName(name);
	}
}
