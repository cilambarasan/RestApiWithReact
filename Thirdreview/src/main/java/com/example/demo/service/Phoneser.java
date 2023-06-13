package com.example.demo.service;

import java.util.List;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.example.demo.model.phoneService;

import com.example.demo.repository.phoneServiceRep;
@Service
public class Phoneser {

	@Autowired
	private phoneServiceRep phonerep;

	public phoneService Post(phoneService phoneser)
	{
		return phonerep.save(phoneser);
	}
	public List<phoneService> getAll()
	{
		return phonerep.findAll();	
	}
	public phoneService Update(phoneService phone)
	{
		return phonerep.save(phone);
	}
	public void Delete(int rollno)
	{
		phonerep.deleteById(rollno);
	}
	public Optional<phoneService> Getbyid(int id)
	{
		return phonerep.findById(id);
	}
	public List<phoneService> getPage(int offset,int phone)
	{
		Pageable paging=PageRequest.of(offset, phone);
		Page<phoneService> Phe=phonerep.findAll(paging);
		return Phe.getContent();
	}
	public List<phoneService> sortData(String field) {
	
		return phonerep.findByUsernameStartingWith(field);
	}
	 public List<phoneService> sortDataAny(String field) {
			
			return phonerep.findAll(Sort.by(field));
		}

}
