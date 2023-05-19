package com.example.ServerSide.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.ServerSide.entity.Movies;


@Repository
public interface MoviesRepository extends JpaRepository<Movies, Integer> {

}
