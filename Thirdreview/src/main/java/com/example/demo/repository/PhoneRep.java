package com.example.demo.repository;






import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Phone;

import jakarta.transaction.Transactional;
@Repository
public interface PhoneRep extends JpaRepository<Phone,Integer> {
	
	Phone findByUsername(String username);
	@Modifying
	@Transactional
	@Query(value = "UPDATE Phone SET password = ?1 WHERE username = ?2", nativeQuery = true)
	void update(String password, String username);
	
	
	
	
	
	
	
 

}
