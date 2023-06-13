package com.example.demo.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.phoneService;

import com.example.demo.service.Phoneser;
@CrossOrigin
@RestController

public class phoneServiceController {
	@Autowired
      private Phoneser phoneservice;
	
	@PostMapping("/sec/add")
	public boolean add1(@RequestBody phoneService phone)
	{
		phoneservice.Post(phone);
		return true;
	}
	@PutMapping("/sec/update")
	public String update(@RequestBody phoneService student)
	{
		phoneservice.Update(student);
		return "Successfully Updated";
	}
	@GetMapping("/sec/get")
	public List<phoneService> getAll()
	{
		return phoneservice.getAll();
	}
	@DeleteMapping("sec/delete/{rollno}")
	public void Delete(@PathVariable int rollno)
	{
		phoneservice.Delete(rollno);
	}
	@GetMapping("/sec/get/{id}")
	public Optional<phoneService> getByid(@PathVariable int id)
	{
		return phoneservice.Getbyid(id);
	}
	@GetMapping("/pagging/{offset}/{phone}")
	public List<phoneService> getPage(@PathVariable int offset,@PathVariable int phone)
	{
		return phoneservice.getPage(offset,phone);
	}

	@GetMapping("/sort/{field}")
	public List<phoneService> sortvote(@PathVariable String field)
	{
		return phoneservice.sortData(field);
	}
	@GetMapping("/sortby/{field}")
	public List<phoneService> sortvoteBy(@PathVariable String field)
	{
		return phoneservice.sortDataAny(field);
	}

}
