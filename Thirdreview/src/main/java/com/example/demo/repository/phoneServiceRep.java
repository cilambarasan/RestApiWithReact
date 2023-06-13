package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.demo.model.phoneService;


@Repository
public interface phoneServiceRep extends JpaRepository<phoneService,Integer> {
   public List<phoneService> findByUsernameStartingWith(String prefix);
}
